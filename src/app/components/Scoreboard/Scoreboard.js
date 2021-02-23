import React from 'react';
import { connect } from 'react-redux';

const Scoreboard = ({
    status, level, score
}) => {

    return (
        <>
        {status==='setting'
            ? null
            :  
            <div className="container row text-center mx-auto">
                <div className="col">
                    <h6>Level</h6>
                    <span>{level.toUpperCase()}</span>
                </div>
                <div className="col">
                    <h6>Score</h6>
                    <span>{score}</span>
                </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    let { status, level, score } = state;
    return {status, level, score};
}

export const ConnectedScoreboard = connect(mapStateToProps)(Scoreboard);