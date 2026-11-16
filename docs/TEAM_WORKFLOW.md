# FourCast team workflow

## Work allocation

| Member | Primary ownership | Branch |
| --- | --- | --- |
| Paulo Massao Santos | OpenWeather client and current conditions: temperature, description, humidity, and wind | `feature/paulo-current-weather-api` |
| Juan Garcia | City search UI and lookup flow, validation, selection, and error/empty states | `feature/juan-city-search` |
| Noah Stelmack | Five-day forecast request, daily aggregation, formatting, and forecast cards | `feature/noah-five-day-forecast` |
| Ryan MacNeil | Weather details composition, shared UI, loading states, accessibility, visual consistency, and Android QA | `feature/ryan-ui-weather-details` |

Each owner implements and tests their area, reviews one teammate's pull request, and helps resolve integration issues involving their code. The workload should be revisited after the first integration if one API task proves materially larger than expected.

## Shared contracts

- `src/app` contains routes and composes features; business logic does not live there.
- Each feature owns its components, hooks, services, types, and tests.
- Shared OpenWeather response types and normalized app models go in `src/shared/types` only when multiple features need them.
- The API key is read from `EXPO_PUBLIC_OPENWEATHER_API_KEY`; no real key is committed.
- Temperatures are displayed in Celsius and wind speed in metres per second unless the team agrees otherwise.

## Git workflow

1. Start work from an updated `main` branch.
2. Check out the assigned feature branch.
3. Commit small, working increments using messages such as `feat(search): add city result list`.
4. Rebase or merge the latest `main` before requesting review.
5. Open a pull request into `main`; at least one teammate reviews it.
6. Run `npm run check` and test on Android before merging.

Do not commit directly to `main`. Avoid editing another member's feature without coordinating first. Cross-feature changes should be small and called out clearly in the pull request.

## Suggested integration order

1. Paulo lands the normalized API client and current-weather contract.
2. Juan connects selected cities to the shared city/coordinate contract.
3. Noah consumes the shared client for the forecast and daily aggregation.
4. Ryan composes and polishes the complete screen while all owners address integration feedback.

Ryan can begin shared components and static states immediately; the order above only describes final integration dependencies.
