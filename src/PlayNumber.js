import React from 'react'

const colors = {
    available: "lightgray",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
};

const PlayNumber = props => (
    <button 
        className="number" 
        style={{backgroundColor: colors[props.status]}}
        onClick={() => props.onClick()}>
        {props.number}
    </button>
);
export default PlayNumber;