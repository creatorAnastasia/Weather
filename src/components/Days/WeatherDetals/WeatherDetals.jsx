import cl from './WeatherDetals.module.css';


const WeatherDetals = (props)=> {

  return (<>
  <div className={cl.city}>{props.name}</div>
  <div className={cl.dayWeek}>{props.dayWeek}</div>
  <div className={cl.blockWrap}>
    <div className={cl.block}>
      <div className={cl.day}>{props.day} 12.00</div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{props.degrees12}</div>
      <div className={cl.icon}><img src = {props.icon12} /></div>
        </div>
        <div className={cl.descr}>{props.description12}</div>
    </div>
    <div className={cl.block}>
      <div className={cl.day}>{props.day} 15.00</div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{props.degrees15}</div>
      <div className={cl.icon}><img src = {props.icon15} /></div>
        </div>
        <div className={cl.descr}>{props.description15}</div>
    </div>
    <div className={cl.block}>
      <div className={cl.day}>{props.day} 18.00</div>
        <div className={cl.weather}>
      <div className={cl.degrees}>{props.degrees18}</div>
      <div className={cl.icon}><img src = {props.icon18} /></div>
        </div>
        <div className={cl.descr}>{props.description18}</div>
    </div>
  </div>
 </>
  )
}
export default WeatherDetals ;