import React,{ useEffect, useState }  from 'react';
import cl from './Days.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru')

const Days = (props)=> {
  const tomorrow =dayjs().add(1, 'day').format('DD MMMM');
  const day2 = dayjs().add(2, 'day').format('DD MMMM');
  const day3 = dayjs().add(3, 'day').format('DD MMMM');
  const day4 = dayjs().add(4, 'day').format('DD MMMM');
  const day5 = dayjs().add(5, 'day').format('DD MMMM');
  
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  const dayWeek2 = capitalize(dayjs().add(2, 'day').format('dddd'));
  const dayWeek3 = capitalize(dayjs().add(3, 'day').format('dddd'));
  const dayWeek4 = capitalize(dayjs().add(4, 'day').format('dddd'));
  const dayWeek5 = capitalize(dayjs().add(5, 'day').format('dddd'));
  
  const [date, setDate] = useState(null)
  useEffect(() => {
  const getDate = async () => {
   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
    console.log(url)
    try {
      const response = await fetch(url)
      if (!response.ok){
        console.log("Ошибка HTTP: " + response.status);
        return;
      }
      const json = await response.json();
    
      setDate(json)
      console.log(json)
    } catch (e) {
      console.log("Ошибка HTTP: " + e);
      return;
    }
  }
  getDate()
}, [props.city.value])


function getIcon(s) {
  const icon = date ? date.list[s].weather[0].icon : '';
  return `http://openweathermap.org/img/w/${icon}.png`
}
// const weatherTomor=getDegrees(date.list[0].main.temp)
function getDegrees(s) {
  if (!date) {
    return 'err'
  }
  let numb = Math.round(date.list[s].main.temp)
  if (numb > 0) {
    return '+' + numb+'°C'
  }
  return numb.toString()+'°C'
}


  return(<>
    <div className={cl.days}>
      <div className={cl.date}>
         {tomorrow}
      </div>
          <div className={cl.day}>
         Завтра {getDegrees(0)} <img src={getIcon(0)}/>
         </div>
      <div className={cl.date}>
         {day2}
      </div>
          <div className={cl.day}>
        {dayWeek2} {getDegrees(8)}<img src={getIcon(8)}/>
          </div>
      <div className={cl.date}>
         {day3}
      </div>
           <div className={cl.day}>
           {dayWeek3} {getDegrees(16)}<img src={getIcon(16)}/>
            </div>
       <div className={cl.date}>
         {day4}
      </div>
          <div className={cl.day}>
          {dayWeek4} {getDegrees(24)}<img src={getIcon(24)} />
            </div>
            <div className={cl.date}>
         {day5}
      </div>
      <div className={cl.day}>
      {dayWeek5} {getDegrees(32)}<img src={getIcon(32)} />
      </div>
    </div>
  </>  )
  }
  
export default Days ;