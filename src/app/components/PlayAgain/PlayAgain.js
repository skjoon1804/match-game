import React from 'react'
import { connect } from 'react-redux';
import { setScore } from '../../actions'

const PlayAgain = ({
    gameStatus,
    onClick
}) => {
    return (
        <div className="mx-auto p-5 text-center">
            <div className='m-3'>
                {gameStatus==='lost' 
                    ? <h3 style={{color: 'red'}}>Game Over</h3>
                    : <h3>Well Done!</h3>
                }
            </div>
            <button className='btn btn-outline-dark form-control border-dark' onClick={onClick}>Play Again</button>
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
            dispatch(setScore(0));
        }
    }
}

export const ConnectedPlayAgain = connect(mapStateToProps, mapDispatchToProps)(PlayAgain);