import {
  getDailyWeatherByCity,
  getFarmById,
  getWeatherByCity,
} from "../services/weather";
import { Farm } from "../types/farmTypes";
import { DailyWeather, DateObject, HourlyWeather } from "../types/weatherTypes";

export const getDateObject = (
  timestamp?: number,
  daysFirstName = false
): DateObject => {
  const dayOfWeek = daysFirstName
    ? ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    : [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ];
  const month: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const today: Date = timestamp ? new Date(timestamp * 1000) : new Date();

  const dayOfWeekText: string = dayOfWeek[today.getDay()];
  const day: number = today.getDate();
  const monthText: string = month[today.getMonth()];
  const year: number = today.getFullYear();

  return { dayOfWeekText, day, monthText, year };
};

export const fetchWeatherHourlyData = async (
  farmID: number
): Promise<{ farm: Farm; weather: HourlyWeather } | undefined> => {
  try {
    const farm = await getFarmById(farmID);
    const weather = await getWeatherByCity(farm?.address?.city);
    return { farm, weather };
  } catch (error) {
    console.log(error);
  }
};

export const fetchWeatherDailyData = async (
  farmID: number,
  days = 7
): Promise<{ weather: DailyWeather } | undefined> => {
  try {
    const farm = await getFarmById(farmID);
    const weather = await getDailyWeatherByCity(farm?.address?.city, days);
    return { weather };
  } catch (error) {
    console.log(error);
  }
};
