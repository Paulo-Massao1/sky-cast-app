import type { City } from './types';
import { env, hasOpenWeatherApiKey } from '../../shared/config/env';

export async function searchCities(query: string): Promise<City[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  if (!hasOpenWeatherApiKey) {
    throw new Error('OpenWeather API key is missing.');
  }

  const url =
    `https://api.openweathermap.org/geo/1.0/direct` +
    `?q=${encodeURIComponent(trimmedQuery)}` +
    `&limit=5&appid=${env.openWeatherApiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`City search failed: ${response.status}`);
  }

  const cities: City[] = await response.json();

  return cities;
}