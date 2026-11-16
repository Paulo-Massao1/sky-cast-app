export const FEATURE_OWNERS = [
  {
    owner: 'Paulo Massao Santos',
    area: 'Current weather and API foundation',
    branch: 'feature/paulo-current-weather-api',
    summary: 'API client, shared weather types, current temperature, conditions, humidity, and wind.',
  },
  {
    owner: 'Juan Garcia',
    area: 'City search',
    branch: 'feature/juan-city-search',
    summary: 'Search interface, city lookup, selection flow, validation, and empty/error states.',
  },
  {
    owner: 'Noah Stelmack',
    area: 'Five-day forecast',
    branch: 'feature/noah-five-day-forecast',
    summary: 'Forecast request, grouping three-hour data by day, and accessible daily forecast cards.',
  },
  {
    owner: 'Ryan MacNeil',
    area: 'Weather details and UI quality',
    branch: 'feature/ryan-ui-weather-details',
    summary: 'Details layout, shared components, theme polish, loading states, accessibility, and Android QA.',
  },
] as const;
