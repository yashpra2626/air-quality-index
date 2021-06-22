import React, { useState, useEffect } from "react";
import "./AQIForm.css";
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';

const AQIForm = () => {

  let country = null;
  let state = null;
  let city = null;
  const [cityAir, setCityAir] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);

  let messageText = "mishra ji";

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
    stateSet.splice(0, stateSet.length);
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
    // console.log("city Air Quality", cityAir);
    // console.log("city Weather", cityWeather)
    // console.log("gcgcucutgu", responseAQI);

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
        {messageText && <p> {messageText} </p>}
        <button type="button" onClick={() => CityDataProvider()}>Search AQI Value</button>
        {cityAir.length!==0 && <p className="air-para">Air Quality Index of {city} is {cityAir.aqius} US AQI</p>}
      </div>
    </div>
  );
};

export default AQIForm;
