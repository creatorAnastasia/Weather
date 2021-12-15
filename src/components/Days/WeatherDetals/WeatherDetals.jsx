import cl from './WeatherDetals.module.css';
import { capitalize } from '../../capitalize'


const WeatherDetals = (props)=> {
  const { data } = props
  return (
  <div>
  <div className={cl.city}>{data.name}</div>
  <div className={cl.wrap}>
  <div className={cl.dayWeek}>{data.dayWeek}</div>
  <div className={cl.day}> {data.day}</div>
  <div className={cl.blockWrap}>
    <div className={cl.block}>
      <div className={cl.time}> 12.00 </div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{data.degrees12}</div>
      <div className={cl.icon}><img src = {data.icon12} /></div>
        </div>
        <div className={cl.descr}>{capitalize(data.description12)}</div>
    </div>
    <div className={cl.block}>
      <div className={cl.time}> 15.00</div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{data.degrees15}</div>
      <div className={cl.icon}><img src = {data.icon15} /></div>
        </div>
        <div className={cl.descr}>{capitalize(data.description15)}</div>
    </div>
    <div className={cl.block}>
      <div className={cl.time}> 18.00</div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{data.degrees18}</div>
      <div className={cl.icon}><img src = {data.icon18} /></div>
        </div>
        <div className={cl.descr}>{capitalize(data.description18)}</div>
    </div>
  </div>
  </div>
  </div>
  )
}
export default WeatherDetals ;