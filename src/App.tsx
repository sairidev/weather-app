import { useEffect, useState } from 'react';
import { IWeatherData } from './types';
import Container from './components/container';
import Form from './components/form';
import Info from './components/info';

export default function App() {
  const [data, setData] = useState<IWeatherData | undefined>(undefined);

  const weatherData = (obj?: IWeatherData) => {
    setData(obj);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (data?.weather?.icon) {
      body.style.backgroundImage = `url(${data.weather.icon})`;
    } else {
      body.style.backgroundImage = '';
    }
  }, [data]);

  return (
    <Container>
      <Form weatherData={weatherData} />

      {data?.weather && <Info data={data} />}
    </Container>
  );
}
