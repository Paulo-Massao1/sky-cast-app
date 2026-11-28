import { env, hasOpenWeatherApiKey } from '@/shared/config/env';
import type { Coordinates, CurrentWeather } from '@/shared/types/weather';

import { mapOpenWeatherCurrentResponse } from './currentWeatherMapper';
import type { OpenWeatherCurrentResponse } from './openWeatherTypes';

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

function validateCoordinates({ latitude, longitude }: Coordinates) {
  const hasValidLatitude =
    Number.isFinite(latitude) && latitude >= -90 && latitude <= 90;
  const hasValidLongitude =
    Number.isFinite(longitude) && longitude >= -180 && longitude <= 180;

  if (!hasValidLatitude || !hasValidLongitude) {
    throw new Error('Valid latitude and longitude are required.');
  }
}

export async function fetchCurrentWeather(
  coordinates: Coordinates,
  signal?: AbortSignal,
): Promise<CurrentWeather> {
  if (!hasOpenWeatherApiKey) {
    throw new Error('OpenWeather API key is missing.');
  }

  validateCoordinates(coordinates);

  const query = [
    `lat=${coordinates.latitude}`,
    `lon=${coordinates.longitude}`,
    `appid=${encodeURIComponent(env.openWeatherApiKey)}`,
    'units=metric',
  ].join('&');

  const response = await fetch(`${CURRENT_WEATHER_URL}?${query}`, { signal });

  if (!response.ok) {
    throw new Error(`Current weather request failed with status ${response.status}.`);
  }

  const data: OpenWeatherCurrentResponse = await response.json();

  return mapOpenWeatherCurrentResponse(data);
}
