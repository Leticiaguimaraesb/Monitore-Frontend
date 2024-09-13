import { Skeleton } from "@mui/material";
import { WeatherWeekProps } from "../../types/weatherComponentsTypes";
import { DailyWeather, DateObject } from "../../types/weatherTypes";
import {
  fetchWeatherDailyData,
  getDateObject,
} from "../../utils/weatherFunctions";
import WeatherCard from "../WeatherCard";
import { useState, useEffect } from "react";

const getDateOutput = (date: DateObject) =>
  `${date.day} de ${date.monthText.slice(0, 3)}`;

const WeatherWeekData = ({ className, farmID, days }: WeatherWeekProps) => {
  const [data, setData] = useState<{ weather?: DailyWeather }>({});

  useEffect(() => {
    fetchWeatherDailyData(farmID, days)
      .then((response) => setData({ weather: response?.weather }))
      .catch();
  }, [farmID, days]);

  const weather = data.weather?.list;

  return (
    <div className={`weatherWeekDataContainer ${className}`}>
      {weather ? (
        weather.map((dayWeather, index) => {
          const active = index === 0 ? true : false;
          const dateData = getDateObject(dayWeather.dt, true);
          const climate =
            dayWeather.weather[0].main == "Clouds"
              ? dayWeather.weather[0].description.split(" ")[0]
              : dayWeather.weather[0].main;

          return (
            <WeatherCard
              key={dayWeather.dt}
              dayName={dateData.dayOfWeekText}
              date={getDateOutput(dateData)}
              temperature={dayWeather.temp.day.toFixed(0)}
              climate={climate}
              active={active}
            />
          );
        })
      ) : (
        <Skeleton variant="rounded" sx={{ bgcolor: "grey.400" }} height={700} />
      )}
    </div>
  );
};

export default WeatherWeekData;
