import "./styles.scss";
import {
  ClimateWeatherCard,
  WeatherCardProps,
} from "../../types/weatherComponentsTypes";
import raining from "../../assets/weatherCard/raining.svg";
import storm from "../../assets/weatherCard/storm.svg";
import clouds from "../../assets/weatherCard/clouds.svg";
import cloudsSun from "../../assets/weatherCard/cloudSun.svg";
import suny from "../../assets/weatherCard/suny.svg";

const allClimate: ClimateWeatherCard = {
  algumas: cloudsSun,
  nublado: clouds,
  nuvens: cloudsSun,
  Rain: raining,
  Clear: suny,
  Extreme: storm,
};

const WeatherCard = ({
  className,
  dayName,
  date,
  temperature,
  climate,
  active = false,
}: WeatherCardProps) => {
  let weatherIcon;
  if (
    climate === "algumas" ||
    climate === "nublado" ||
    climate === "nuvens" ||
    climate === "Rain" ||
    climate === "Clear" ||
    climate === "Extreme"
  ) {
    weatherIcon = allClimate[climate];
  } else {
    weatherIcon = allClimate["Clear"];
  }

  className = active ? `${className} activeDay` : className;

  return (
    <div className={`weahterCardContainer ${className}`}>
      <div className="daysOfWeek">
        <p className="dayName">{dayName}</p>
        <p className="date">{date}</p>
      </div>
      <div className="temperature">
        <p>{`${temperature}°`}</p>
      </div>
      <img src={weatherIcon} alt="icone de clima" />
    </div>
  );
};

export default WeatherCard;
