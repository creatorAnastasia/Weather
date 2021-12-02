import React, { useEffect,useState } from 'react';
import './App.css';
import City from './components/City/City'
import Days from './components/Days/Days'
import { Container } from '@mui/material';

function App() {
  const defaultListCity = [
    {
      name:'Москва',
      value:'Moscow'
    },
    {
      name:'Сургут',
      value:'Surgut'
    },
    {
      name: 'Сочи',
      value:'Sochi'
    },
    {
      name:'Санкт-Петербург',
      value:'Saint Petersburg'
    },
    {
      name:'Казань',
      value:'Kazan'
    },
  ]
  const [listCity, setListCity] = useState(defaultListCity)
  const [city, setCity] = useState(null)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (data1)  => {
      console.log("got data")
      let lat = data1.coords.latitude;
      let lon = data1.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      console.log(url)
      const response = await fetch(url)
      if (!response.ok){
        console.log("Ошибка HTTP: " + response.status);
        return;
      }
      const json = await response.json();
      setCity(json)
      console.log(json)
      setListCity([
        {
          name:json.city.name,
          value:json.city.name
        },
        ...listCity
      ])
    })
}, []);
  return (
    <Container maxWidth="sm">
      <div className="app-wrapper">
        {city && (<><City setCity={setCity}
              city={city} 
              listCity={listCity}
              setListCity={setListCity}
        />
        <Days city={city} 
              setCity={setCity}
               listCity={listCity}
              setListCity={setListCity}/></>)}
      </div>
    </Container>
  );
}
export default App;
