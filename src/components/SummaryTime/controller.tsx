import { useEffect, useState } from "react";
import { HourlyWeather, SummaryTimeType } from "../../types/weatherTypes";
import { Farm } from "../../types/farmTypes";
import separator from "./../../assets/separator.svg";
import DayController from "./dayController";
import HourController from "./hourController";
import iconLocation from "./../../assets/iconLocation.svg";
import { fetchWeatherHourlyData } from "../../utils/weatherFunctions";
import raining from "../../assets/weatherCard/raining.svg";
import storm from "../../assets/weatherCard/storm.svg";
import clouds from "../../assets/weatherCard/clouds.svg";
import cloudsSun from "../../assets/weatherCard/cloudSun.svg";
import suny from "../../assets/weatherCard/suny.svg";
import { useNavigate } from "react-router-dom";

const allClimate = {
  algumas: cloudsSun,
  nublado: clouds,
  nuvens: cloudsSun,
  Rain: raining,
  Clear: suny,
  Extreme: storm,
};

export const DataWeather = ({ farmID, resume }: SummaryTimeType) => {
  const [data, setData] = useState<{ weather?: HourlyWeather; farm?: Farm }>(
    {}
  );
  const navigate = useNavigate();
  useEffect(() => {
    fetchWeatherHourlyData(farmID)
      .then((response) =>
        setData({ farm: response?.farm, weather: response?.weather })
      )
      .catch();
  }, [farmID]);
  const { weather, farm } = data;

  if (!weather || !farm) {
    return null;
  }
  const firstWeatherItem = weather.list?.[0];

  const climate =
    firstWeatherItem?.weather[0].main == "Clouds"
      ? firstWeatherItem.weather[0].description.split(" ")[0]
      : firstWeatherItem?.weather[0].main;

  if (resume) {
    return (
      <div className="containerSummaryTime" onClick={() => navigate("/clima")}>
        <div className="containerDateAndLocal">
          <time>
            <DayController />
          </time>
          <address>
            <img src={iconLocation} alt="Icone de localização" />
            {farm?.address.city}, {farm?.address.state}, Brazil
          </address>
        </div>
        <div className="containerWeather">
          <div className="containerHourAndTemp">
            <span>
              <HourController />
            </span>
            <img src={separator} alt="separador" />
            <div className="temperature">
              <span>{firstWeatherItem?.main.temp.toFixed(0)}</span>
              <sup className="celsiusSymbol">°C</sup>
            </div>
          </div>
          <div className="weatherSummary">
            <ul>
              <li>{firstWeatherItem?.weather[0]?.description}</li>
              <li>
                Chuva:{" "}
                {(firstWeatherItem?.pop
                  ? firstWeatherItem.pop * 100
                  : 0
                ).toFixed(0)}{" "}
                %
              </li>
              <li>Umidade: {firstWeatherItem?.main.humidity} %</li>
              <li>
                Vento:
                {firstWeatherItem?.wind.speed
                  ? (firstWeatherItem.wind.speed * 3.6).toFixed(1)
                  : 0}
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="background">
        <div className="containerWeatherPageClimate">
          <div className="containerInformationTime">
            <span>
              <HourController />
            </span>
            <div className="containerDateAndLocalPageClimate">
              <time>
                <DayController resume={true} />
              </time>
              <address>
                <img src={iconLocation} alt="Icone de localização" />
                {farm?.address.city}, {farm?.address.state}, Brazil
              </address>
            </div>
          </div>
          <div className="temperaturePageClimate">
            <div>
              <span>{firstWeatherItem?.main.temp.toFixed(0)}</span>
              <sup>°C</sup>
              <p>{firstWeatherItem?.weather[0]?.description}</p>
            </div>
            <img
              src={
                climate === "algumas" ||
                climate === "nublado" ||
                climate === "nuvens" ||
                climate === "Rain" ||
                climate === "Clear" ||
                climate === "Extreme"
                  ? allClimate[climate]
                  : allClimate["Clear"]
              }
              alt="icone de clima"
            />
          </div>
        </div>
      </div>
    </>
  );
};
