import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';
import Avatar1 from './Images/cheetah.jpg';
import Avatar2 from './Images/elephants.jpg';
import Avatar3 from './Images/head.jpg';
import Avatar4 from './Images/lioncub.jpg';
import Avatar5 from './Images/squirrel.jpg';
import Avatar6 from './Images/tiger.jpg';
 
export default class App extends Component {
    render() {
        return (         
<div>
  <div className ="container">  
    <div id = "News">                   
      <h1>News headlines {">"} </h1>

        <Box classBox = "A1" Image={Avatar1} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
        <Box classBox = "A2" Image={Avatar2} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
        <Box classBox = "A3" Image={Avatar3} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
  </div>                            
  <div id = "Sport">
      <h1>Sports headlines {">"}</h1>
        <Box classBox = "A4" Image={Avatar4} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
        <Box classBox = "A5" Image={Avatar5} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
        <Box classBox = "A6" Image={Avatar6} text = "This is a spotty cat" para ="somet text to say what a loverly spotted cat this is and so fast"/>
    </div>
  </div>             
</div>                     
        );
    }
}
 
