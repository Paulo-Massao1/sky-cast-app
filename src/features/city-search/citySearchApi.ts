
import type { City } from './types';

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

export async function searchCities(query: string): Promise<City[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  if (!API_KEY) {
    throw new Error('OpenWeather API key is missing.');
  }

  const url =
    `https://api.openweathermap.org/geo/1.0/direct` +
    `?q=${encodeURIComponent(trimmedQuery)}` +
    `&limit=5&appid=${API_KEY}`;

  const response = await fetch(url);

if (!response.ok) {
  const errorDetails = await response.text();

  console.log('OpenWeather status:', response.status);
  console.log('OpenWeather error:', errorDetails);

  throw new Error(`City search failed: ${response.status}`);
}

  const cities: City[] = await response.json();

  return cities;
}
