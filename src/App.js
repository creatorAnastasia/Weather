import React, { useState } from 'react';
import './App.css';
import City from './components/City/City'
import Days from './components/Days/Days'


function App() {
  const listCity = [
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
  const [city, setCity] = useState(listCity[1])
  
  return (
  <div className="app-wrapper">
    <City setCity={setCity}
          city={city} 
          listCity={listCity}/>
    <Days city={city} />
  </div>
  );
}
 // https://api.gismeteo.net/v2/weather/current/
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=a63740baaa8c5f06d8ce4273818d9d10
export default App;
