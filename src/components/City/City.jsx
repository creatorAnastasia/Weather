import React, { useEffect, useState } from 'react'
import cl from './City.module.css';
import { getIcon } from '../Icon/Icon';
import  Search  from '../City/Search/Search'
import { capitalize } from '../capitalize'

const City = ({ city, listCity, setCity, setListCity }) => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open)  => {
    setState(open);
  };
  function getDegrees() {
    if (!city) {
      return ''
    }
    let numb = Math.round(city.list[0].main.temp)
    if (numb > 0) {
      return '+' + numb + '°C'
    }
    return numb.toString() + '°C'
  }
  const descripWeather = city ? city.list[0].weather?.[0].description : '';
  const name = city ? city.city.name: '';
  const icon = city ? city.list[0].weather?.[0].main : '';
   
  return (
  <>
    <header className={cl.citySticky}>
      <Search 
        toggleDrawer={toggleDrawer}
        setCity={setCity}
        city={name}
        state={state}
        listCity={listCity}
        setListCity={setListCity}
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