import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
        <div className = {props.classBox}>
            <img src={props.Image} alt= "Avatar"/>
            <h2> {props.text}</h2>
            <h3>{props.para}</h3>
        </div>
    )
}

export default Box;

