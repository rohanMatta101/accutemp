import React, { Component, Fragment } from 'react';
import classes from './Search.css';


class Search extends Component{
    state={
        placedata:null,
        temperature:null,
        showBackdrop:false,
        showModal:false
      }
      
      data=(event)=>{
        this.setState({placedata:event.target.value})
      }
      fetchdata=(event)=>{
        if(event.key==='Enter'){
          if(this.state.placedata!==null){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.placedata}&units=metric&APPID=958702d51f545d64f2a5e1a0c2ebdfd7`)
            .then(response=>response.json())
            .then(result=>{
              this.setState({temperature:result.main.temp,showBackdrop:true,showModal:true})
              console.log(result);
            }) 
          }
        }
      }
      render(){
        //const cssClasses=[classes.Search,this.props.clicked?classes.Searchshow :null];
          return(
            <Fragment>
            {this.props.clicked?<div className={classes.Search}>
            <input  type="text" placeholder="Search... and Press Enter" onChange={(event)=>this.data(event)} onKeyPress={(event)=>this.fetchdata(event)}></input>
            </div>:null}
            
            </Fragment>
            
          )
      }
}
export default Search;