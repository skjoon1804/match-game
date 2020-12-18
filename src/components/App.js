import Game from './Game.js'
import {useState} from 'react'

const App = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
}
export default App;