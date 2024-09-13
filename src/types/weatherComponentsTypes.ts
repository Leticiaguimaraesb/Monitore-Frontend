export type WeatherCardProps = {
  className?: string;
  dayName: string;
  date: string;
  temperature: string;
  climate: string;
  active?: boolean;
};

export type ClimateWeatherCard = {
  algumas: string;
  nublado?: string;
  nuvens?: string;
  Rain?: string;
  Clear?: string;
  Extreme?: string;
};

export type WeatherWeekProps = {
  className?: string;
  farmID: number;
  days?: number;
};
