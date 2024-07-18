import React, { useEffect, useState } from 'react';
import { IWeatherData } from '../types';
import { getData } from '../utils';
import '../styles/form.scss';

export default function Form({
  weatherData,
}: {
  weatherData: (data: IWeatherData) => void;
}) {
  const [city, setCity] = useState('London');

  // first data
  useEffect(() => {
    search();
  }, []);

  const search = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }

    let data;
    data = await getData(import.meta.env.VITE_API_KEY, city);

    if (data?.error) {
      data = await getData(import.meta.env.VITE_API_KEY, 'London');
    }

    weatherData(data);
  };

  return (
    <form id='form' onSubmit={search}>
      <input
        type='text'
        name='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        maxLength={100}
        placeholder='city'
        autoComplete='off'
        onFocus={() => setCity('')}
      />
    </form>
  );
}
