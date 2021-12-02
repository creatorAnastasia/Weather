import React, { useEffect, useState } from 'react'
import cl from './City.module.css';
import { getIcon } from '../Icon/Icon';
import  Search  from '../City/Search/Search'


const City = (prop) => {
  const data = prop.city
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  // function getIcon() {
  //   const icon = data ? data.weather[0].icon : '';
  //   return `http://openweathermap.org/img/w/${icon}.png`
  // }
  const icon = data ? data.list[0].weather?.[0].main : '';

  function getDegrees() {
    if (!data) {
      return ''
    }
    let numb = Math.round(data.list[0].main.temp)
    if (numb > 0) {
      return '+' + numb+'°C'
    }
    return numb.toString()+'°C'
  }
  const descripWeather = data ? data.list[0].weather?.[0].description : '';
 const name=data ? data.city.name: '';
   
  return (
  <>
    <header className={cl.citySticky}>
      <Search 
        toggleDrawer={toggleDrawer}
        setCity={prop.setCity}
        city={name}
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