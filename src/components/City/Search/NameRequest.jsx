import React, {useState } from 'react';


export async function nameRequest(cityName) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
    console.log(url)
    const response = await fetch(url)
    if (!response.ok){
      console.log("Ошибка HTTP: " + response.status);
      return;
    }
    return response.json();
}