import React from 'react'
import './PlayAgain.css'

const PlayAgain = props => (
    <div className="game-done">
        <div className='message'>{props.gameStatus==='lost' ? "Game Over" : "Well Done!"}</div>
        <button className='play-again' onClick={props.onClick}>Play Again</button>
    </div>
);
export default PlayAgain;