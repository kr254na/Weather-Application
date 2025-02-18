import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_API_KEY;
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let getWeatherInfo;
    try{
    getWeatherInfo=async()=>{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let response=await res.json();
        let result={
            city:city,
            temp:response.main.temp,
            minTemp:response.main.temp_min,
            maxTemp:response.main.temp_max,
            humidity:response.main.humidity,
            feelsLike:response.main.feels_like,
            weather:response.weather[0].description
        };
        return result;
    }
    }catch(err){
        throw(err);
    }
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        setCity("");
        let info=await getWeatherInfo();
        updateInfo(info);
        }
        catch(err){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
        <br></br><br></br>
        <Button type="submit" variant="contained">Search</Button>
        {error && <p style={{color:"red"}}>No such place</p>}
        </form>
        </div>
    )
}