import Lottie  from 'lottie-react';
import CLEAR_DAY from "./assets/animations/CLEAR_DAY.json"
import CLEAR_NIGHT from "./assets/animations/CLEAR_NIGHT.json"
import PARTLY_CLOUDY_DAY from "./assets/animations/PARTLY_CLOUDY_DAY.json"
import PARTLY_CLOUDY_NIGHT from "./assets/animations/PARTLY_CLOUDY_NIGHT.json"
import CLOUDY from "./assets/animations/CLOUDY.json"
import RAIN from "./assets/animations/RAIN.json"
import SNOW from "./assets/animations/SNOW.json"
import FOG from "./assets/animations/FOG.json"
import './weather.css'

function WeatherBackground({ code }) {
  const iconMapping = {
    "01d": CLEAR_DAY,
    "01n": CLEAR_NIGHT,
    "02d": PARTLY_CLOUDY_DAY,
    "02n": PARTLY_CLOUDY_NIGHT,
    "03d": PARTLY_CLOUDY_DAY,
    "03n": PARTLY_CLOUDY_NIGHT,
    "04d": CLOUDY,
    "04n": CLOUDY,
    "09d": RAIN,
    "09n": RAIN,
    "10d": RAIN,
    "10n": RAIN,
    "11d": RAIN,
    "11n": RAIN,
    "13d": SNOW,
    "13n": SNOW,
    "50d": FOG,
    "50n": FOG
  };

  const animationData = iconMapping[code] || CLEAR_DAY; // fallback

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="lottieBackground"
    />
  );
}

export default WeatherBackground;
