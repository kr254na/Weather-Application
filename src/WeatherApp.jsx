import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:'Delhi',
        feelsLike: 17.56,
        humidity: 63,
        maxTemp: 18.05,
        minTemp: 18.05,
        temp: 18.05,
        weather: "haze"
    });
    let updateInfo=(info)=>{
        setWeatherInfo({...info});
    }
    return(
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}