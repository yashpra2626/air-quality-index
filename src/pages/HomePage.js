import React from "react";
import "./HomePage.css";
import AQIForm from "./AQIForm";



const HomePage = () => {
  return (
    <div className="home-background">
      <h1>
      
        <spam>“</spam>Be a part of the <spam style={{ color: "#000a2f" }}>SOLUTION</spam>,
      </h1>
      <h2>
        
        Not a part of the <spam style={{ color: "#a60200" }}>POLLUTION</spam><spam>”</spam>
      </h2>

      <p>
        Air Pollution is one of the major issues in our environment. It is the
        presence of harmful gases in the atmosphere. Forests are said as the
        natural air filters. Sadly, the whole world is facing deforestation
        issues on a huge basis. This is the reason why polluted air is not
        getting filtered and resulted in more Air Pollution. The root cause of
        air pollution is the burning of fossil fuels, smokes released from the
        industries, combustion of coals, burning of farm fields, household
        fire-works, etc. Nature is a precious gift to humankind. Disturbance in
        any of the elements of nature, disbalances the environment. Air
        Pollution also increase the AQI of the cities and can cause serious
        health issues to all living organisms. Some strict rule should be
        implemented for Industrial chimneys and waste. Transport Industries are
        the biggest contributor to air pollution. Using natural gases instead of
        using fuels for vehicles can be a smart move for reducing air pollution.
        Using Public Transport can be the best option for reducing road air
        pollution. Reducing the Garbage and wastage created by household and
        industries can reduce air toxicity. Energy conservation is one of the
        best steps toward reducing air pollution.
      </p>
       <AQIForm/>
    </div>
  );
};

export default HomePage;
