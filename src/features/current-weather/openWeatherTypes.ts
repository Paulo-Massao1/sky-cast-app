export type OpenWeatherCurrentResponse = {
  name: string;
  main: {
    humidity: number;
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};
