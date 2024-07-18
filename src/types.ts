export interface IWeatherData {
  country: string;
  localtime: string;
  weather: {
    condition: string;
    icon: string;
    dewpoint_c: number;
    dewpoint_f: number;
    temp_c: number;
    temp_f: number;
  };
}
