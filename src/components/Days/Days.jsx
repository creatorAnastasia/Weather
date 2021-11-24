import React,{ useEffect, useState }  from 'react';
import cl from './Days.module.css';

const Days = (props)=> {
//   const [date, setDate] = useState(null)
//   useEffect(() => {
//   const getDate = async () => {
//   //  const url = `api.openweathermap.org/data/2.5/forecast?q=${props.city.value}&appid=${process.env.REACT_APP_API_KEY}`
//     console.log(url)
//     const response = await fetch(url)
//     if (!response.ok){
//       console.log("Ошибка HTTP: " + response.status);
//       return;
//     }
//     const json = await response.json();
  
//     setDate(json)
//     console.log(json)
//   }
//   getDate()
// }, [props.city.value])

  return(<>
    <div className={cl.days}>
      <div className={cl.day}>
         Сегодня
      </div>
      <div className={cl.day}>
        Затвра
      </div>
      <div className={cl.day}>
       день недели
      </div>
      <div className={cl.day}>
      день недели
      </div>
      <div className={cl.day}>
      день недели
      </div>
      <div className={cl.day}>
      день недели
      </div>
      <div className={cl.day}>
      день недели
      </div>
    </div>
  </>  )
  }
  
export default Days ;