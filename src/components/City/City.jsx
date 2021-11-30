import React, { useEffect, useState } from 'react'
import cl from './City.module.css';
import Geocode from 'react-geocode';
import { getIcon } from '../Icon/Icon';
import  Search  from '../City/Search/Search'

const City = (prop) => {
  const [data, setData] = useState(null)
  const [state, setState] = useState(false);
  const [geol, setGeol] = useState(null);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
 
  useEffect( () => {
    navigator.geolocation.getCurrentPosition( (data1)  => {
      let lat = data1.coords.latitude;
      let lon = data1.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      console.log(url)
      // weatherApi(data.coord.lat,data.coord.lon).then(respon => {
          
    
      //   })
      },() => {
         alert("Ошибка! Разрешитете доступ к местоположению!");
    } );

}, []);

  useEffect( () => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${prop.city.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      console.log(url)
      const response = await fetch(url)
      if (!response.ok){
        console.log("Ошибка HTTP: " + response.status);
        return;
      }
      const json = await response.json();
      setData(json)
      console.log(json)
    }
    getData()
  }, [prop.city.value])
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  // function getIcon() {
  //   const icon = data ? data.weather[0].icon : '';
  //   return `http://openweathermap.org/img/w/${icon}.png`
  // }
  const icon = data ? data.weather[0].main : '';

  function getDegrees() {
    if (!data) {
      return ''
    }
    let numb = Math.round(data.main.temp)
    if (numb > 0) {
      return '+' + numb+'°C'
    }
    return numb.toString()+'°C'
  }
  const descripWeather = data ? data.weather[0].description : '';

  
  return (
  <>
    <header className={cl.citySticky}>
      <Search 
        toggleDrawer={toggleDrawer}
        setCity={prop.setCity}
        city={prop.city}
        state={state}
        listCity={prop.listCity}
      />
      </header>
      <div className={cl.descrWrap}>
        <div className={cl.morning}>
           9.00-12.00
        </div>
      <div className={cl.home}>
      <div className={cl.degrees}>
        {getDegrees()}
      </div> 
      <div className = {cl.img}> <img src = {getIcon(icon)} /> </div>
      </div>
      <div className={cl.evening}>
          15.00-18.00
        </div>
      </div>
      <div className={cl.descripWeather}>
        {capitalize(descripWeather)}
      </div>
     
      
    </>)
}
  
export default City ;