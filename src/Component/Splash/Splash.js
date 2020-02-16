import React,{useState,useEffect} from 'react';
//import {CssBaseline,Container,Typography} from '@material-ui/core';
import logo from '../../assets/splash/logo.png';
import {Zoom,Slide }from 'react-reveal';
import {style} from './style';
function Splash(props){
    useEffect(()=>{
        setTimeout(()=>{
            props.history.push('applogin')
           },4000)
    })
    
    return(
        <div style={style.container}>
        <header style={style.appheader}>
        <Slide bottom>
          <img src={logo} style={style.logo} alt="logo" />
          </Slide>
        </header>
      </div>);
}
export default Splash;