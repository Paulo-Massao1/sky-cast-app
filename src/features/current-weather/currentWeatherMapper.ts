import type { CurrentWeather } from '@/shared/types/weather';

import type { OpenWeatherCurrentResponse } from './openWeatherTypes';

export function mapOpenWeatherCurrentResponse(
  response: OpenWeatherCurrentResponse,
): CurrentWeather {
  const condition = response.weather[0];

  if (!condition) {
    throw new Error('OpenWeather response is missing its weather condition.');
  }

  return {
    cityName: response.name,
    condition: {
      description: condition.description,
      iconCode: condition.icon,
    },
    humidityPercent: response.main.humidity,
    temperatureCelsius: response.main.temp,
    windSpeedMetresPerSecond: response.wind.speed,
  };
}
