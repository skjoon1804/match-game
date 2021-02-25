import React from 'react'
import './PlayNumber.css'

const colors = {
    available: "white",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
};

const borders = (status) => (status === 'used' ? "none" : "thin solid black")

const PlayNumber = props => {
    return (
    <button 
        className="number" 
        id="number"
        style={{backgroundColor: colors[props.status], border: borders(props.status)}}
        onClick={() => props.onClick(props.number, props.status)}
        disabled={props.status === 'used'}
        >
        {props.number}
    </button>
    )
};
export default PlayNumber;