import React from 'react'
import './GameSettings.css'



const GameSettings = props => (
    <>
    <div className='settings'>
        <form id="frm">
            <label>
                Number of Stars: <input type="text" name="numstars" required/>
            </label>
            <label>
                Timer: <input type="text" name="timer" required/>
            </label>
            
            <input type="submit" className="start-game" onClick={props.onClick} value="Start Game" />
        </form>
    </div>
    </>
);
export default GameSettings