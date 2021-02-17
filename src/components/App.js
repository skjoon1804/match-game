import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { ConnectedGame } from './Game/Game.js'

import { useState } from 'react'

let store = createStore(reducer);

const App = () => {
    const [gameId, setGameId] = useState(store.getState().game);
    return (
        <Provider store={store}>
            <ConnectedGame key={gameId} startNewGame={() => setGameId(store.getState().game)}/>
        </Provider>
    );
}
export default App;