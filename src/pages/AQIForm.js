import React ,{useState} from 'react'
import './AQIForm.css'


const AQIForm=()=> {

    const [city,setCity]=useState();

    const changeHandler=(event)=>{
        setCity(event.target.value)
    }


    return (
       
        <div class="cover">
          <h1>Air Quality Index</h1>
          <form  class="flex-form" onSubmit={()=>alert("Success")}>
            <label for="from">
              <i class="ion-location"></i>
            </label>
            <input 
            id="search"
            type="search" 
            name="search" 
            onChange={changeHandler}
            placeholder="Enter the city Name.."/>
            <button type="submit">Search</button>
            <h1>{city}</h1>
          </form>
        </div>
      
    
        
    )
}

export default AQIForm;
