import { IWeatherData } from '../types';

export default function Info({ data }: { data: IWeatherData }) {
  return (
    <div
      style={{
        zIndex: 999,
        backdropFilter: 'blur(5px)',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgb(197, 197, 197)',
      }}
    >
      <h3 style={{ fontSize: '40px' }}>{data.country}</h3>

      <h4 style={{ fontSize: '25px' }}>{data.weather.condition}</h4>

      <h5>Dewpoint</h5>
      <small style={{ fontSize: '40px' }}>
        {data.weather.dewpoint_c}°C | {data.weather.dewpoint_f}°F
      </small>

      <h5>Temperature</h5>
      <small style={{ fontSize: '40px' }}>
        {data.weather.temp_c}°C | {data.weather.temp_f}°F
      </small>
    </div>
  );
}
