import { useState } from "react";
import axios from "axios";
function Form(){
    const [country,setcountry]=useState();
    const [Data,setData]=useState();
    function onChange(event){
        setcountry(event.target.value);
    }
    async function handleSumbit(event){
        event.preventDefault();
        try{
            const response=await axios.post("/WeatherApi",{country:country});
            console.log(response.data);
            setData(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
    <form>
        <input type="text" placeholder="Enter Country Name" onChange={onChange}/>
        <input type="Submit" onClick={handleSumbit}/>
        {!Data? null:
        <div>
            <img alt="image" src={Data.icon}/>
            <h2>{Data.Data.weather[0].description}</h2>
            <h3>{Data.Data.main.temp}</h3>
            <h3>Wind Speed: {Data.Data.wind.speed}</h3>
        </div>}
    </form>);
}
export default Form;