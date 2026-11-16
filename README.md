# SkyCast

SkyCast is a weather forecast app developed by the FourCast team for CPRG 303 – Mobile Application Development.

## Features

- Search weather by city
- Current temperature and weather conditions
- Humidity and wind speed
- Five-day weather forecast

## Tech stack

- React Native
- Expo
- Expo Router
- TypeScript
- OpenWeather API

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the API key

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Ask the team for the shared OpenWeather API key and add it to your local `.env` file. Every team member should use the same team key:

```env
EXPO_PUBLIC_OPENWEATHER_API_KEY=team_api_key
```

Do not commit the `.env` file or a real API key.

### 3. Start the project

```bash
npm start
```

## Project structure

```text
src/
  app/                    Routes and screen composition
  features/
    city-search/          Search and city selection
    current-weather/      Current conditions, humidity, and wind
    forecast/             Five-day forecast
    weather-dashboard/    Main weather screen and UI states
  shared/
    config/               Environment configuration
    theme/                Shared design tokens
    types/                Shared application models
```

Feature-specific code stays inside its feature. Code should move to `shared` only when it is used by more than one feature.

## Available scripts

```bash
npm start          # Start Expo
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript
npm run check      # Run all project checks
```
