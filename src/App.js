import React, { useState } from 'react';
import './App.css';
import City from './components/City/City'
import Days from './components/Days/Days'
import { Container } from '@mui/material';

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
    <Container maxWidth="sm">
      <div className="app-wrapper">
        <City setCity={setCity}
              city={city} 
              listCity={listCity}
        />
        <Days city={city} />
      </div>
    </Container>
  );
}
export default App;
