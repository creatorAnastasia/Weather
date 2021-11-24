import React, { useEffect, useState } from 'react'
import cl from './City.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Geocode from 'react-geocode';

const City = (props) => {
  const [data, setData] = useState(null)
  const [state, setState] = useState(false);
  const [geol, setGeol] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  useEffect(() => {
   navigator.geolocation.getCurrentPosition(success,err)
  function success(position) {
    setGeol(position)
    let crd = position.coords;
    console.log(position);
   
    Geocode.fromLatLng(`${crd.latitude}`,`${crd.longitude}`).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
    // console.log(`Широта: ${crd.latitude}`);
    // console.log(`Долгота: ${crd.longitude}`);
    // console.log(`Плюс-минус ${crd.accuracy} метров.`);
  };
  function err(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      console.log(url)
      const response = await fetch(url)
      if (!response.ok){
        console.log("Ошибка HTTP: " + response.status);
        return;
      }
      const json = await response.json();
      // const json = {
      //   "coord": {
      //       "lon": 39.7303,
      //       "lat": 43.6
      //   },
      //   "weather": [
      //       {
      //           "id": 804,
      //           "main": "Clouds",
      //           "description": "пасмурно",
      //           "icon": "04d"
      //       }
      //   ],
      //   "base": "stations",
      //   "main": {
      //       "temp": 10.61,
      //       "feels_like": 9.68,
      //       "temp_min": 10.61,
      //       "temp_max": 11.05,
      //       "pressure": 1018,
      //       "humidity": 75,
      //       "sea_level": 1018,
      //       "grnd_level": 1017
      //   },
      //   "visibility": 10000,
      //   "wind": {
      //       "speed": 2.13,
      //       "deg": 164,
      //       "gust": 2.59
      //   },
      //   "clouds": {
      //       "all": 100
      //   },
      //   "dt": 1637323225,
      //   "sys": {
      //       "type": 2,
      //       "id": 48811,
      //       "country": "RU",
      //       "sunrise": 1637295612,
      //       "sunset": 1637329982
      //   },
      //   "timezone": 10800,
      //   "id": 491422,
      //   "name": "Сочи",
      //   "cod": 200
      // }
      setData(json)
      console.log(json)
    }
    getData()
  }, [props.city.value])
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function getIcon() {
    const icon = data ? data.weather[0].icon : '';
    return `http://openweathermap.org/img/w/${icon}.png`
  }
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

  
  return (<>
    <header className={cl.citySticky}>
  
    <Drawer 
            anchor={'top'}
            open={state}
            onClose={toggleDrawer(false)}>
             <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    ></Box>
    <List >
        {props.listCity.map(({ name, value }) => (
          <ListItem onClick={toggleDrawer(false)}
          button key={name}>
            <ListItemText primary={name} onClick={() => props.setCity({ name, value })} />
          </ListItem>
        ))}
      </List>
           </Drawer>
      <div className={cl.text1}>{props.city.name}</div>
      <div className={cl.icon}>
      <Stack direction="row" spacing={1}>
      <IconButton onClick={toggleDrawer(true)}>
        <SearchOutlinedIcon />
      </IconButton>
    </Stack>
    </div>
      </header>
     
      <div className={cl.degrees}>
        {getDegrees()} <img src={getIcon(0)}/>
      </div>
      <div className={cl.descripWeather}>
        {capitalize(descripWeather)}
      </div>
    </>)
  }
  
export default City ;