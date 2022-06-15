import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { WeatherData, AddWeather } from './types';
import AddWeatherForm from './components/Form'
import './App.css';
import WeatherArticle from './components/WeatherArticle';
import Header from './components/Header';

const initialData: WeatherData | null = null;

const App = () => {
  const [data, setData] = useState(initialData);
  const [cityName, setCityName] = useState("");

  const addWeather: AddWeather = (name) => {
    setCityName(name)
  }
  useEffect(() => {
    if (cityName === "") {
      return
    }
    fetch(`/api?query=${cityName}`)
      .then((res) => res.json())
      .then((response) => setData(response));
  }, [cityName]);

  return (
    <React.Fragment>
      < Header />
      < AddWeatherForm addWeather={addWeather} />
      {data ? <WeatherArticle weatherData={data} /> : undefined}
    </React.Fragment>
  );
}

export default App;