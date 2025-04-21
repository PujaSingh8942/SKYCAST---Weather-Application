import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import CloudIcon from '@mui/icons-material/Cloud';
import SunnyIcon from '@mui/icons-material/Sunny';
import LightModeIcon from '@mui/icons-material/LightMode';
import LandslideIcon from '@mui/icons-material/Landslide';

export default function InfoBox({ info }) {
  const CLEARSKY_URL =
    "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VufGVufDB8fDB8fHww";
  const COLD_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D";
  const CLOUDYSKY_URL =
    "https://images.unsplash.com/photo-1641994083335-30cef444b6d5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherImage = () => {
        if (info.temp < 10 && info.humidity > 80) return RAINY_URL; // high priority condition
        if (info.humidity > 85) return RAINY_URL;
        if (info.humidity > 60) return CLOUDYSKY_URL;
        if (info.temp > 38) return HOT_URL;
        if (info.temp < 12) return COLD_URL;
        if (info.temp < 15) return CLEARSKY_URL;
        return CLEARSKY_URL; // default fallback
      };

      const getWeatherIcon = () => {
        if (info.temp < 10 && info.humidity > 80) return  <CloudySnowingIcon/>; // high priority condition
        if (info.humidity > 85) return <CloudySnowingIcon/>;
        if (info.humidity > 60) return <CloudIcon/>;
        if (info.temp > 38) return <SunnyIcon/>;
        if (info.temp < 12) return <AcUnitIcon/>;
        if (info.temp < 15) return <LightModeIcon/>;
        return <LandslideIcon/>; // default fallback
      };
      

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={getWeatherImage()} title="weather image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: "text.secondary" }}>
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temp = {info.tempMin}&deg;C</div>
              <div>Max Temp = {info.tempMax}&deg;C</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
