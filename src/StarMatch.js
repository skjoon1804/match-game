import Game from './Game.js'
import {useState} from 'react'

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId}/>
}
export default StarMatch;