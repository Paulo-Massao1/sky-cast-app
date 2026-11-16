# SkyCast

SkyCast is the FourCast team's Android weather application for CPRG 303. It is built with React Native, Expo SDK 58, Expo Router, and TypeScript.

## Planned features

- Current temperature and weather condition
- Humidity and wind speed
- Five-day forecast
- Search by city

The team plans to use OpenWeather. Its free 5 day / 3 hour forecast response must be grouped into one summary per day in the app.

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Add an OpenWeather API key to `EXPO_PUBLIC_OPENWEATHER_API_KEY`.
4. Run `npm start`, then open the project on Android with Expo Go.

Never commit `.env` or a real API key. `EXPO_PUBLIC_` values are included in the client app, so this key is not a secret at runtime; restrict and monitor it in the provider dashboard.

## Project structure

```text
src/
  app/                 Expo Router screens and layouts only
  features/            Feature-owned UI, hooks, services, and tests
    city-search/
    current-weather/
    forecast/
    weather-details/
  shared/              Code reused by two or more features
    config/
    theme/
    types/
docs/
  TEAM_WORKFLOW.md     Ownership, branches, and pull-request workflow
```

Keep feature-specific code inside its feature. Move code to `shared` only when at least two features use it. Export a feature's public API from its `index.ts` rather than importing its internal files from another feature.

## Quality checks

Run `npm run check` before opening a pull request. Also test the changed flow on Android.
