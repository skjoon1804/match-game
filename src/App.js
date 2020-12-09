import './App.css';
import React, {Component} from 'react';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stars : Math.floor(Math.random()*9)+1,
      availableNums : Array.from({length: 9}, (_, i) => 1+i),
      candidateNums : [1,2,3]
    };
  }

  candidatesAreWrong() {
    let candidateSum = this.state.candidateNums.reduce((a,b) => a+b, 0);
    console.log(candidateSum);
    return candidateSum > this.state.stars; 
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
            {Array.from({length: 9}, (_, i) => 1+i).map (number =>
               <PlayNumber status={'used'} key={number} number={number}
                  onClick={this.candidatesAreWrong()}/>
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  }
}

export default App;
