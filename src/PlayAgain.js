import React from 'react'

const PlayAgain = props => (
    <div className="game-done">
        <div className='message'>{props.gameStatus==='lost' ? "Game Over" : "Good Job!"}</div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);
export default PlayAgain;