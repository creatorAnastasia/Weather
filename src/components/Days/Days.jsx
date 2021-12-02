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
  const date = props.city
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
  borderRadius: '2rem',
  boxShadow: 24,
  outline: 'none',
  maxHeight: "89vh",
  overflow: "auto",
  pt: 2,
  px: 4,
  pb: 3,
};

const [open, setOpen] = useState(false);
const defaultModalData = {
  name: "",
  dayWeek: "",
  day: "",
  degrees12: "",
  icon12: "",
  description12: "",
  degrees15: "",
  icon15: "",
  description15: "",
  degrees18: "",
  icon18: "",
  description18: ""
}
const [modalData, setModalData] = useState(defaultModalData);
const handleOpen = (newData) => {
  setModalData(newData)
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
const name = date ? date.city.name : '';
  return(
    <div className={cl.days}>
    <Modal
      open={open}
      onClose={handleClose}>
       <Box sx={{...style }}>
         <WeatherDetals
            data={modalData}
          />
      </Box>
   </Modal>
   <WeatherBlock  dayWeek={"Завтра"}
                  day={tomorrow} 
                  degrees={getDegrees(0)} 
                  icon = {getItemIcon(0)} 
                  onClick={() => handleOpen({
                    name: props.city.value,
                    dayWeek: "Завтра",
                    day: tomorrow,
                    degrees12: getDegrees(0),
                    icon12: getItemIcon(0),
                    description12: getDecr(0),
                    degrees15: getDegrees(1),
                    icon15: getItemIcon(1),
                    description15: getDecr(1),
                    degrees18: getDegrees(2),
                    icon18: getItemIcon(2),
                    description18: getDecr(2)
                  })} />

   <WeatherBlock  dayWeek={dayWeek2} 
                  day={day2} 
                  degrees={getDegrees(8)} 
                  icon = {getItemIcon(8)} 
                  onClick={() => handleOpen({
                    name: props.city.value,
                    dayWeek: dayWeek2,
                    day: day2,
                    degrees12: getDegrees(8),
                    icon12: getItemIcon(8),
                    description12: getDecr(8),
                    degrees15: getDegrees(9),
                    icon15: getItemIcon(9),
                    description15: getDecr(9),
                    degrees18: getDegrees(10),
                    icon18: getItemIcon(10),
                    description18: getDecr(10)
                  })}  />
   <WeatherBlock  dayWeek={dayWeek3} 
                  day={day3} 
                  degrees={getDegrees(16)} 
                  icon = {getItemIcon(16)} 
                  onClick={() => handleOpen({
                    name: props.city.value,
                    dayWeek: dayWeek3,
                    day: day3,
                    degrees12: getDegrees(16),
                    icon12: getItemIcon(16),
                    description12: getDecr(16),
                    degrees15: getDegrees(17),
                    icon15: getItemIcon(17),
                    description15: getDecr(17),
                    degrees18: getDegrees(18),
                    icon18: getItemIcon(18),
                    description18: getDecr(18)
                  })} />
   <WeatherBlock  dayWeek={dayWeek4} 
                  day={day4} 
                  degrees={getDegrees(24)} 
                  icon = {getItemIcon(24)} 
                  onClick={() => handleOpen({
                    name: props.city.value,
                    dayWeek: dayWeek4,
                    day: day4,
                    degrees12: getDegrees(24),
                    icon12: getItemIcon(24),
                    description12: getDecr(24),
                    degrees15: getDegrees(25),
                    icon15: getItemIcon(25),
                    description15: getDecr(25),
                    degrees18: getDegrees(26),
                    icon18: getItemIcon(26),
                    description18: getDecr(26)
                  })} />
   <WeatherBlock  dayWeek={dayWeek5} 
                  day={day5} 
                  degrees={getDegrees(32)} 
                  icon = {getItemIcon(32)} 
                  onClick={() => handleOpen({
                    name: props.city.value,
                    dayWeek: dayWeek5,
                    day: day5,
                    degrees12: getDegrees(32),
                    icon12: getItemIcon(32),
                    description12: getDecr(32),
                    degrees15: getDegrees(33),
                    icon15: getItemIcon(33),
                    description15: getDecr(33),
                    degrees18: getDegrees(34),
                    icon18: getItemIcon(34),
                    description18: getDecr(34)
                  })}/>
      </div>  
   )
  }
  
export default Days ;