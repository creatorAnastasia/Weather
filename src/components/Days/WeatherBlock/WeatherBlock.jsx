import React from 'react';
import cl from './WeatherBlock.module.css';

const WeatherBlock = (props)=> {
  return(<div className={cl.wrap}
              onClick={props.onClick}>
   <div className={cl.date}>{props.day}</div>
   <div className={cl.dayWrap}>
      <div className={cl.day}>  {props.dayWeek}</div>
      <div className={cl.degrees}>
          {props.degrees} </div>
      <div className = {cl.img}> <img src = {props.icon} /> </div>
    </div>
         </div>)
}
export default WeatherBlock ;