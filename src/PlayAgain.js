import React from 'react'

const PlayAgain = props => (
    <div className="game-over">
        <button onClick={props.onClick}>Play Again</button>
    </div>
);
export default PlayAgain;