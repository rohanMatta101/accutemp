import React from 'react';
import classes from './Image.css';
const image=(props)=>{
 return(
     <div className={classes.Image}>
         {props.children}
     </div>
 )
}
export default image;