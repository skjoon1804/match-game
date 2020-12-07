import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {stars : Math.floor(Math.random()*9)+1};
  }

  render() {
    return (
      <div className="game">
        <div className="help">Click number(s) that sum to the number of stars</div>
        <div className="body">
          <div className="left">
            {Array.from({length: this.state.stars}, (_, i) => 1+i).map(starId =>
              <div className="star" key={starId}></div>
            )}
          </div>
          <div className="right">
            {Array.from({length: 9}, (_, i) => 1+i).map(number =>
              <div className="number" key={number}>{number}</div>
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  }
}

export default App;
