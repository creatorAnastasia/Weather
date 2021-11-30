import cloudyDay from '../../assets/img/cloudy-day.svg'
import thunder from '../../assets/img/thunder.svg';
import drizzle from '../../assets/img/drizzle.svg';
import rainy from '../../assets/img/rainy.svg';
import snow from '../../assets/img/snowy.svg';
import clearDay from '../../assets/img/day.svg';

export function getIcon(icon) { 
  let img;
  switch (icon){
      case "Clouds": 
          img = cloudyDay
          break;

      case "Thunderstorm": 
          img = thunder;
          break;

      case "Drizzle": 
          img = drizzle;
          break;

      case "Rain": 
          img = rainy;
          break;

      case "Snow": 
          img = snow;
          break;

      case "Clear":
          img = clearDay;
          break;

      default: 
          img = clearDay;
          break;
  }
  return img 
}