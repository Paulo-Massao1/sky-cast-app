const apiKey = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY?.trim();

export const env = {
  openWeatherApiKey: apiKey ?? '',
} as const;

export const hasOpenWeatherApiKey = apiKey !== undefined && apiKey.length > 0;
