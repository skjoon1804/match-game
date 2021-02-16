import React from 'react';
import './Timer.css'

const Timer = (props) => {

    let timerPercent = (props.secondsLeft/5)*100 + "%";
    

    return (
        <div className="m-2">
            <div className="timer">Time Remaining: {props.secondsLeft}</div>
            <div className="progress">
                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={props.secondsLeft} 
                        aria-valuemin="0" aria-valuemax="5" style={{width: timerPercent}}>
                </div>
            </div>
        </div>
    )
}
export default Timer;