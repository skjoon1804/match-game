import React from 'react'
import './PlayNumber.css'

const colors = {
    available: "lightgray",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
};



const PlayNumber = props => (
    <button 
        className="number" 
        id="number"
        style={{backgroundColor: colors[props.status]}}
        onClick={() => props.onClick(props.number, props.status)}>
        {props.number}
    </button>
);
export default PlayNumber;