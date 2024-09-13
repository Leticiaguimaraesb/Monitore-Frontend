import api from "./api";
import { DailyWeather, HourlyWeather } from "./../types/weatherTypes";
import { Farm } from "../types/farmTypes";

export async function getDailyWeatherByCity(
  city: string | undefined,
  days = 7
): Promise<DailyWeather> {
  const response = await api.get(`weather/daily?city=${city}&days=${days}`);
  return response.data;
}

export async function getWeatherByCity(
  city: string | undefined
): Promise<HourlyWeather> {
  const response = await api.get(`weather/hourly?city=${city}`);
  return response.data;
}

export async function getFarmById(id: number): Promise<Farm> {
  const response = await api.get(`/farms/${id}`);
  return response.data;
}
