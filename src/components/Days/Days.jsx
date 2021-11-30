import React,{ useEffect, useState }  from 'react';
import cl from './Days.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import WeatherBlock from '../Days/WeatherBlock/WeatherBlock'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getIcon } from '../Icon/Icon';
import WeatherDetals from '../Days/WeatherDetals/WeatherDetals'
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


function getItemIcon(s){
  const icon = date ? date.list[s].weather[0].main : '';
  return getIcon(icon);
}

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
function getDecr(s){
  const descr = date ? date.list[s].weather[0].description : '';
  return descr;
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const [open, setOpen] = useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
  return(
    <div className={cl.days}> 
   <WeatherBlock  dayWeek={"Завтра"}
                  day={tomorrow} 
                  degrees={getDegrees(0)} 
                  icon = {getItemIcon(0)} 
                  onClick={handleOpen} />
   <Modal
      open={open}
      onClose={handleClose}>
       <Box sx={{...style }}>
         <WeatherDetals 
            name={props.city.name}
            dayWeek={"Завтра"}
            day={tomorrow} 
            degrees12={getDegrees(0)} 
            icon12 = {getItemIcon(0)}
            description12= {getDecr(0)}
            degrees15={getDegrees(1)} 
            icon15 = {getItemIcon(1)}
            description15= {getDecr(1)} 
            degrees18={getDegrees(2)} 
            icon18 = {getItemIcon(2)}
            description18= {getDecr(2)}  />
      </Box>
   </Modal>
   <WeatherBlock  dayWeek={dayWeek2} 
                  day={day2} 
                  degrees={getDegrees(0)} 
                  icon = {getItemIcon(0)} 
                  onClick={handleOpen} />
  <Modal
      open={open}
      onClose={handleClose}>
       <Box sx={{...style }}>
         <WeatherDetals 
            name={props.city.name}
            dayWeek={dayWeek2}
            day={day2} 
            degrees12={getDegrees(8)} 
            icon12 = {getItemIcon(8)}
            description12= {getDecr(8)}
            degrees15={getDegrees(9)} 
            icon15 = {getItemIcon(9)}
            description15= {getDecr(9)} 
            degrees18={getDegrees(10)} 
            icon18 = {getItemIcon(10)}
            description18= {getDecr(10)}  />
      </Box>
   </Modal>
   
   <WeatherBlock  dayWeek={dayWeek3} 
                  day={day3} 
                  degrees={getDegrees(16)} 
                  icon = {getItemIcon(16)} />
   <WeatherBlock  dayWeek={dayWeek4} 
                  day={day4} 
                  degrees={getDegrees(24)} 
                  icon = {getItemIcon(24)} />
   <WeatherBlock  dayWeek={dayWeek5} 
                  day={day5} 
                  degrees={getDegrees(32)} 
                  icon = {getItemIcon(32)} />
      </div>  
   )
  }
  
export default Days ;