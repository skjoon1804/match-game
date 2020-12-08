import './App.css';
import React, {Component} from 'react';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';

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
            <StarsDisplay count={this.state.stars}/>
          </div>
          <div className="right">
            <PlayNumber />
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  }
}

export default App;
