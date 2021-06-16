import React, { useState, useEffect } from "react";
import "./AQIForm.css";

const AQIForm = () => {
  const [city, setCity] = useState();

  const [fetchData, setFetchData] = useState();
  
  const changeHandler = (event) => {
    setCity(event.target.value);
  };

  let responseAqi;

  
  const confirmAQIHandler = async (event) => {
    event.preventDefault();
    const responseData = await fetch(
      `https://api.waqi.info/feed/${city}/?token=e26a99d83b2dfd4497a322b43a1fc7629306c738`
    );

     responseAqi = await  responseData.json()

    console.log(responseAqi.data);
    
    setFetchData(responseAqi.data)

    if(fetchData){
      console.log(fetchData)
    }
    
    

  };


  
  return (
    <div class="cover">
      <h1>Air Quality Index</h1>
      <form class="flex-form" onSubmit={confirmAQIHandler}>
        <label for="from">
          <i class="ion-location"></i>
        </label>
        <input
          id="search"
          type="search"
          name="search"
          onChange={changeHandler}
          placeholder="Enter the city Name.."
        />
        <button type="submit">Search</button>
      </form>
      <h1>{city}</h1>
     
     
    </div>
  );
};

export default AQIForm;
