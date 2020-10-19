import React from 'react';
import classes from './Display.css';
const display=(props)=>{
    let image=`http://openweathermap.org/img/wn/${props.icon}@2x.png`
    return(
        <div className={classes.Display}>
            <h1 className={classes.place}>{props.place}</h1>
            <hr></hr>
            <p className={classes.Temp}>{props.temperature}°C</p>
            <p className={classes.left}>Minimum: {props.min} °C</p>
            <p className={classes.right}>Maximum: {props.max} °C</p>
            <p className={classes.data}>Humidity : {props.humidity}%</p>
            <hr></hr>
            <img src={image} className={classes.image}></img>
            <p className={classes.desc}>{props.description}</p>
            
            <button onClick={props.startagain} className={classes.goBack}>Search again</button>
        </div>
    )
}
export default display
