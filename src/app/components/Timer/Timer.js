import React from 'react';
import { connect } from 'react-redux';
import './Timer.css'

const Timer = ({
    time, secondsLeft
}) => {
    
    let timerPercent = (secondsLeft/time)*100 + "%";
    const timerStyle = () => {
        return secondsLeft <= 5 ? {color: 'red'} : null;
    }
    return (
        <div className="m-2">
            <div className="timer" style={timerStyle()}>Time Remaining: {secondsLeft}</div>
            <div className="progress">
                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={secondsLeft} 
                        aria-valuemin="0" aria-valuemax={time} style={{width: timerPercent}}>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let secondsLeft = ownProps.secondsLeft;
    let time = state.time;
    return { time, secondsLeft };
}

export const ConnectedTimer = connect(mapStateToProps)(Timer);