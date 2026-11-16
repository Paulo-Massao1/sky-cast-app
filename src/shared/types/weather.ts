export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type WeatherCondition = {
  description: string;
  iconCode: string;
};

export type CurrentWeather = {
  cityName: string;
  condition: WeatherCondition;
  humidityPercent: number;
  temperatureCelsius: number;
  windSpeedMetresPerSecond: number;
};

export type DailyForecast = {
  date: string;
  condition: WeatherCondition;
  highCelsius: number;
  lowCelsius: number;
};
