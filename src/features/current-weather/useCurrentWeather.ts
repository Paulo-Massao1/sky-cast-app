import { useCallback, useEffect, useState } from 'react';

import type { Coordinates, CurrentWeather } from '@/shared/types/weather';

import { fetchCurrentWeather } from './currentWeatherApi';

export function useCurrentWeather(coordinates: Coordinates | null) {
  const [data, setData] = useState<CurrentWeather | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestVersion, setRequestVersion] = useState(0);

  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;

  const refetch = useCallback(() => {
    setRequestVersion((version) => version + 1);
  }, []);

  useEffect(() => {
    if (latitude === undefined || longitude === undefined) {
      return;
    }

    const controller = new AbortController();

    queueMicrotask(() => {
      if (!controller.signal.aborted) {
        setData(null);
        setError(null);
        setIsLoading(true);
      }
    });

    fetchCurrentWeather({ latitude, longitude }, controller.signal)
      .then(setData)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted) {
          const message =
            requestError instanceof Error
              ? requestError.message
              : 'Unable to load current weather.';

          setError(message);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [latitude, longitude, requestVersion]);

  const hasCoordinates = latitude !== undefined && longitude !== undefined;

  return {
    data: hasCoordinates ? data : null,
    error: hasCoordinates ? error : null,
    isLoading: hasCoordinates ? isLoading : false,
    refetch,
  };
}
