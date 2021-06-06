import React from "react";
import './Articles.css'
import art1 from '../assets/1604303957-9571.jpg'
import art2  from '../assets/1603681385-9063.jpg'
import art3 from '../assets/1507529757-8532.jpg'
import art4 from '../assets/allahabad_meteorology_summary.png'
import art5 from '../assets/1604372191-7792.jpg'


const Articles = () => {

  return (
    <div className="articles-background">
        <h1> Articles </h1>
        <div className="article">
        <div className="art1">
        <h2>Delhi's air quality improves to 'poor' category; AQI drops to 280</h2>
        <p>According to the Central Control Room for Air Quality Management data, several areas of Delhi such as Anand Vihar, Chandani Chowk, Rohini and Jawaharlal Nehru Stadium recorded 'poor' air quality, with the AQI values standing at 221, 250, 252 and 227 respectively, whereas Lodhi road recorded 'moderate' air quality with AQI standing at 121.</p>
        <spam style={{marginRight: "10rem", fontWeight:"bold"}}>Src: Business Standard</spam>
        <button>
        <a href="https://www.business-standard.com/about/what-is-air-quality-index">Click Here to Learn More</a>
        </button>
        </div>
        <div className="art2">
        <img src={art1}></img>
        </div>
        </div>


        <div className="article">
        <div className="art1">
        <h2>Air 'very poor' across Ghaziabad, Noida, Faridabad, Gurgaon for third day</h2>
        <p>According to the index, an AQI between zero and 50 is considered 'good', 51 and 100 'satisfactory', 101 and 200 'moderate', 201 and 300 'poor', 301 and 400 'very poor', and 401 and 500 'severe'.
        The average 24-hour AQI at 4 pm on Wednesday was 328 in Ghaziabad, 322 in Noida, 337 in Greater Noida, 307 in Faridabad and 316 in Gurgaon, according to CPCB's Sameer app.</p>
        <spam style={{marginRight: "10rem", fontWeight:"bold"}}>Src: Business Standard</spam>
        <button>
        <a href="https://www.business-standard.com/about/what-is-air-quality-index">Click Here to Learn More</a>
        </button>
        </div>
        <div className="art2">
        <img src={art2}></img>
        </div>
        </div>


        <div className="article">
        <div className="art1">
        <h2>Firecrackers ban fails: Police blame delayed ban, opposition from people</h2>
        <p>
        A delayed ban on firecrackers in Delhi and non-cooperation from Diwali revellers in complying with the curbs stymied efforts to stop any further deterioration of air quality, according to top police officials.
        Sounds of firecrackers were continuously heard across Delhi and its neighbouring areas through the Saturday night even though a ban was imposed on their sale and use in the national capital region in view of the rising air pollution and the COVID-19 pandemic.
        </p>
        <spam style={{marginRight: "10rem", fontWeight:"bold"}}>Src: Times of India</spam>
        <button>
        <a href="https://timesofindia.indiatimes.com/">Click Here to Learn More</a>
        </button>
        </div>
        <div className="art2"><img src={art3}></img></div>
        </div>



        <div className="article">
        <div className="art1">
        <h2>Multi-Pollutant Emission Inventory</h2>
        <p>
        We compiled an emissions inventory for the Allahabad region for the following pollutants – sulfur dioxide (SO2), nitrogen oxides (NOx), carbon monoxide (CO), non-methane volatile organic compounds (NMVOCs), carbon dioxide (CO2); and particulate matter (PM) in four bins (a) coarse PM with size fraction between 2.5 and 10 μm (b) fine PM with size fraction less than 2.5 μm (c) black carbon (BC) and (d) organic carbon (OC), for year 2015 and projected to 2030. In Phase 1, base year for all the calculations was 2015. In Phase 2, all the calculations are updated for year 2018.
        </p>
        <spam style={{marginRight: "10rem", fontWeight:"bold"}}>Src: Urban Emission</spam>
        <button>
        <a href="https://urbanemissions.info/india-apna/allahabad-india/">Click Here to Learn More</a>
        </button>
        </div>
        <div className="art2"><img src={art4}></img></div>
        </div>


        <div className="article">
        <div className="art1">
        <h2>Toxic air to make India's Covid-19 fight deadlier, healthcare under strain</h2>
        <p>
        Delhi's 28 million people haven't had a single day of clean air since early September, according to World Air Quality Index
        With some of the most polluted cities on the planet and more than 8 million confirmed coronavirus cases, India is battling a medical calamity. Temperatures are falling and cases and pollution are spiking across major cities, including the capital New Delhi,
        </p>
        <spam style={{marginRight: "10rem", fontWeight:"bold"}}>Src: Business Standard</spam>
        <button>
        <a href="https://www.business-standard.com/">Click Here to Learn More</a>
        </button>
        </div>
        <div className="art2"><img src={art5}></img></div>
        </div>





    </div>
  );
};

export default Articles;
