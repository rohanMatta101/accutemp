import React, { Component, Fragment } from 'react';
import classes from './Landing.css';
import Image from './Image';
import Myclasses from './Search.css';
import Display from './Display';
import Error from './Error';

class Landing extends Component{
  state={
    landing:true,
    placedata:null,
    temperature:null,
    humidity:null,
    clicked:false,
    desc:null,
    max:null,
    min:null,
    icon:null,
    error:false
  }
  getSearch=()=>{
    this.setState({clicked:true})
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
          this.setState(
            {temperature:result.main.temp,
              humidity:result.main.humidity,
              clicked:false,
              desc:result.weather[0].description,
              max:result.main.temp_max,min:result.main.temp_min,icon:result.weather[0].icon,landing:false})
          console.log(result);
        })
        .catch(error=>{
          this.setState({error:true,landing:false})
        }) 
      }
    }
  }
  
  restart=()=>{
    this.setState({
      landing:true,
      placedata:null,
      temperature:null,
      humidity:null,
      clicked:false
    })
  }
  errorRestart=()=>{
    this.setState({
      landing:true,
      placedata:null,
      temperature:null,
      humidity:null,
      clicked:false,
      error:false
    })
  }
  render(){
  return(
  
    <Image>
      {this.state.landing?
      <div className={classes.Landing}>
          <h1>Search The Location</h1>
          <button onClick={this.getSearch}>Get Search Bar</button>
      </div>:
      <div className={classes.LandingRemove}>
      <h1>Search The Location</h1>
      <button onClick={this.getSearch}>Get Search Bar</button>
      </div>
      }
      
      {this.state.clicked?<div className={Myclasses.Search}>
            <input  type="text" placeholder="Search... and Press Enter" onChange={(event)=>this.data(event)} onKeyPress={(event)=>this.fetchdata(event)}></input>
            </div>: this.state.temperature?
            <div className={Myclasses.SearchRemove}>
            <input  type="text" placeholder="Search... and Press Enter" onChange={(event)=>this.data(event)} onKeyPress={(event)=>this.fetchdata(event)}></input>
            </div>:null
      }
      {this.state.error?<Error startagain={this.errorRestart}/>:null}
      {this.state.temperature?<Display description={this.state.desc} max={this.state.max} min={this.state.min} startagain={this.restart} place={this.state.placedata} temperature={this.state.temperature} humidity={this.state.humidity } icon={this.state.icon} />:null}
      </Image>
  )
 }
}
export default Landing;
//{this.state.temperature?<Display place={this.state.placedata} temperature={this.state.temperature} humidity={this.state.humidity} />:null}
//https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
//https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260