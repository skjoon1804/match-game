import React from 'react'
import { connect } from 'react-redux';
import './PlayAgain.css'

const PlayAgain = ({
    gameStatus,
    onClick
}) => {
    return (
        <div className="mx-auto p-5">
            <div className='m-3'>
                {gameStatus==='lost' 
                    ? <h3 style={{color: 'red'}}>Game Over</h3>
                    : <h3>Well Done!</h3>
                }
            </div>
            <button className='btn btn-outline-info mx-auto d-block p-3' onClick={onClick}>Play Again</button>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    let gameStatus = ownProps.gameStatus;
    return { gameStatus };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick() {
            ownProps.onClick();
        }
    }
}

export const ConnectedPlayAgain = connect(mapStateToProps, mapDispatchToProps)(PlayAgain);