import React from 'react';
import classes from './Error.css';

const error=(props)=>{
    return(
        <div className={classes.Error}>
        <h1 >
          Invalid Location entered !
        </h1>
        <button onClick={props.startagain} className={classes.backbtn}>Search Again</button>
        </div>
    )
}
export default error;