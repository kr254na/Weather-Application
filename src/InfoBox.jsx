import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";
    const COLD_URL="https://images.unsplash.com/photo-1483536999439-9c9c911cc1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.webp?a=1&b=1&s=612x612&w=0&k=20&c=5JbnjvMjP0e-eOi9OhaS6CzHR_I3UWdkZaYjDcBjL94=";
    let weatherInfo=info;
    return (
        <div className="infoBox">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city} &nbsp;
          {info.humidity>80?<ThunderstormIcon/>:(info.temp>15)?<WbSunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature : {weatherInfo.temp}&deg;C</p>
        <p>Humidity : {weatherInfo.humidity}</p>
        <p>Min Temp : {weatherInfo.minTemp}</p>
        <p>Max Temp : {weatherInfo.maxTemp}</p>
        <p>The weather can be described as <i>{weatherInfo.weather}</i> and feels like {weatherInfo.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}