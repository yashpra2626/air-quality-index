import React, { useState, useEffect } from "react";
import "./AQIForm.css";
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import AirGood from "../assets/airGood.svg";
import AirModerate from "../assets/airModerate.svg";
import AirSomeUnhealthy from "../assets/airSomeUnhealthy.svg";
import AirRed from "../assets/airRed.svg";
import AirHazard from "../assets/airHazard.svg"

const AQIForm = () => {

  let country = null;
  let state = null;
  let city = null;
  const [cityAir, setCityAir] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);
  const [airLevel, setAirLevel] = useState(null);
  const [airEffect, setAirEffect] = useState(null);
  const [airCaution, setAirCaution] = useState(null);
  const [airHealthIcon, setAirHealthIcon] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [colorOfBox, setColorOfBox] = useState(null);

  let messageText = "mishra ji";


  const DUMMY_DATA = [
    {
      minAqi: 0,
      maxAqi: 50,
      air_condition: "Good",
      effect: "Air quality is considered satisfactory, and air pollution poses little or no risk",
      caution: "	None",
      airIcon: AirGood,
      boxColor: "airGood",
    },
    {
      minAqi: 51,
      maxAqi: 100,
      air_condition: "Moderate",
      effect: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
      caution: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
      airIcon: AirModerate,
      boxColor: "airModerate",
    },
    {
      minAqi: 101,
      maxAqi: 150,
      air_condition: "Poor",
      effect: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
      caution: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
      airIcon: AirSomeUnhealthy,
      boxColor: "airSomeUnhealthy",
    },
    {
      minAqi: 151,
      maxAqi: 200,
      air_condition: "Unhealthy",
      effect: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
      caution: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion",
      airIcon: AirRed,
      boxColor: "airUnhealthy",
    },
    {
      minAqi: 201,
      maxAqi: 300,
      air_condition: "Very Unhealthy", 
      effect: "Health warnings of emergency conditions. The entire population is more likely to be affected.",
      caution: "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",
      airIcon: AirRed,
      boxColor: "airVeryUnhealthy",
    },
    {
      minAqi: 301,
      maxAqi: 300000000,
      air_condition: "Hazardous",
      effect: "Health alert: everyone may experience more serious health effects",
      caution: "Everyone should avoid all outdoor exertion",
      airIcon: AirHazard,
      boxColor: "airHazard",
    }
  ]

  const countrySet = [];
  const stateSet = [];
  const citySet = [];

  const changeHandlerCountry = temp => {
    if (temp !== null) {
      country = temp.value;
      console.log("selected country value", country);
      fetchStates();
    }
  };

  const changeHandlerState = temp => {
    if (temp !== null) {
      state = temp.value;
      console.log("selected state value", state);
      fetchCities();
    }
  };

  const changeHandlerCity = temp => {
    if (temp !== null) {
      city = temp.value;
      console.log("selected city value", city);
      console.log("handler", messageText)
    }
    // setVariables();
  };


  useEffect(() => {
    const fetchCountries = async (inputText, callback) => {
      const responseData = await fetch(
        `http://api.airvisual.com/v2/countries?key=6fd4dde7-9338-4c95-b522-f59718eef025`
      );
      const responseCountry = await responseData.json()
      {
        responseCountry.data.map((item, i) => (
          countrySet.push({ label: item.country, value: item.country })
        ))
      }
      console.log("countrySet", countrySet)
    };
    fetchCountries();
  }, []);


  const fetchStates = async () => {
    const responseData = await fetch(
      `http://api.airvisual.com/v2/states?country=${country}&key=6fd4dde7-9338-4c95-b522-f59718eef025`
    );
    const responseState = await responseData.json()
    console.log("naya call", responseState);
    stateSet.splice(0, stateSet.length);   //to again empty the set when it is called back
    messageText = null;
    if (responseState.status === "success") {
      responseState.data.map((item, i) => (
        stateSet.push({ label: item.state, value: item.state })
      ))
      console.log("stateSet", stateSet)
    }
    else {
      messageText = responseState.data.message;
      console.log("Error Message State:", messageText);
    }

  };

  const fetchCities = async () => {
    const responseData = await fetch(
      `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=6fd4dde7-9338-4c95-b522-f59718eef025`
    );
    const responseCity = await responseData.json()
    messageText = null
    citySet.splice(0, citySet.length);
    if (responseCity.status === "success") {
      responseCity.data.map((item, i) => (
        citySet.push({ label: item.city, value: item.city })
      ))
      console.log("citySet", citySet)
    }
    else {
      messageText = responseCity.data.message;
      console.log("Error message City", messageText)
    }
  };

  const CityDataProvider = async () => {
    const responseData = await fetch(
      `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=6fd4dde7-9338-4c95-b522-f59718eef025`
    );
    const responseAQI = await responseData.json()
    if (responseAQI.status === "success") {
      setCityAir(responseAQI.data.current.pollution);
      setCityWeather(responseAQI.data.current.weather);
    }
    else {
      console.log("Error search AQI", responseAQI.data.message)
    }
    return { airStatus: responseAQI.data.current.pollution, weatherStatus: responseAQI.data.current.weather };
  };

  const setVariables = async () => {
    const responseData = await CityDataProvider();
    setCityName(city);
    DUMMY_DATA.map((item) => {
      if ((responseData.airStatus.aqius > item.minAqi) && (responseData.airStatus.aqius < item.maxAqi)) {
        setAirLevel(item.air_condition);
        setAirEffect(item.effect);
        setAirCaution(item.caution);
        setAirHealthIcon(item.airIcon);
        setColorOfBox(item.boxColor);
      }
    })
  };


  const CountryComponent = props => (
    <div className="big-box">
      {<p>Country</p>}
      <components.Control {...props} />
    </div>
  );

  const StateComponent = props => (
    <div className="big-box">
      {<p>State</p>}
      <components.Control {...props} />
    </div>
  );

  const CityComponent = props => (
    <div className="big-box">
      {console.log("controlCity", messageText)}
      {<p>City</p>}
      <components.Control {...props} />
    </div>
  );



  return (
    <div className="form-box">
      <div class="cover">
        <h1>Air Quality Index</h1>

        <div className="aqi-cityWise">
          <Select
            options={countrySet}
            placeholder="Enter the country"
            // value={country}
            defaultValue
            isClearable
            isSearchable
            onChange={changeHandlerCountry}
            components={{ Control: CountryComponent }}
            className="country-box"
            theme={theme => ({
              ...theme,
              borderRadius: 3,

            })}
          />

          <Select
            options={stateSet}
            placeholder="Enter the State"
            // value={country}
            defaultValue
            isClearable
            isSearchable
            onChange={changeHandlerState}
            components={{ Control: StateComponent }}
            className="country-box"
            theme={theme => ({
              ...theme,
              borderRadius: 3,

            })}
          />

          <Select
            options={citySet}
            placeholder="Enter the City"
            // value={country}
            defaultValue
            isClearable
            isSearchable
            onChange={changeHandlerCity}
            components={{ Control: CityComponent }}
            className="country-box"
            theme={theme => ({
              ...theme,
              borderRadius: 3,

            })}
          />
        </div>

        {console.log("city Air Quality", cityAir)}
        {console.log("city Weather", cityWeather)}
        {/* {messageText && <p> {messageText} </p>} */}

        <button type="button" className="button-css"
          onClick={() =>
            setVariables()
          }>
          Search AQI Value
        </button>
        {cityAir.length !== 0 &&
          <div className={`${colorOfBox}-box`}>
            <div class="airBox">
              <div className="aqi-box">
                <div className="usaqi">
                  US AQI
                </div>
                <div className="aqi-value">
                  {cityAir.aqius}
                </div>
              </div>
              <div className="aqi-cond">
                <div className="aqi-title">
                  Live AQI Index
                </div>
                <div className="air-status">
                  {airLevel}
                </div>
              </div>
            </div>
            <div className="airCityName">
              {cityName}
            </div>
            <div className="airhealthIcon">
              <img className='air-icon-class' src={airHealthIcon} alt="image of air" />
            </div>

          </div>
        }
        {cityAir.length !== 0 &&
          <div className="index-message">
            <div className="index-para">
              <h1> ⚫ Health Implications </h1>
              <p> {airEffect} </p>
            </div>
            <div className="index-para">
              <h1> ⚫ Cautionary Statement (for PM2.5) </h1>
              <p> {airCaution} </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AQIForm;
