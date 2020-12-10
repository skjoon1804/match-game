import './App.css';
import React, {useEffect, useState, Component} from 'react';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

const App = () => {
  const maxNum = 9;
  const [stars, setStars] = useState(Math.floor(Math.random()*maxNum)+1);
  const [availableNums, setAvailableNums] = useState(Array.from({length: maxNum}, (_, i) => i+1));
  const [candidateNums, setCandidateNums] = useState([]);
  const gameOver = availableNums.length === 0;

  const resetGame = () => {
    setStars(Math.floor(Math.random()*maxNum)+1);
    setAvailableNums(Array.from({length: maxNum}, (_, i) => i+1));
    setCandidateNums([]);
  }

  const candidatesAreWrong = () => {
    let candidateSum = candidateNums.reduce((a,b) => a+b, 0);
    return candidateSum > stars;
  };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong() ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const randomStar = (newAvailableNums) => {
    const sets = [[]];
    const sums = [];
    for (let i=0; i<newAvailableNums.length; i++) {
      for (let j=0, len=sets.length; j<len; j++) {
        const candidateSet = sets[j].concat(newAvailableNums[i]);
        const candidateSum = candidateSet.reduce((a,b) => a+b, 0);
        if (candidateSum <= maxNum) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return newAvailableNums[Math.floor(Math.random() * newAvailableNums.length)];
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == 'used') {
      return ;
    }
    const newCandidateNums = 
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn!==number);

    let newCandidateSum = newCandidateNums.reduce((a,b) => a+b, 0);
    if (newCandidateSum !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
      setStars(randomStar(newAvailableNums));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
      <div className="game">
        <div className="help">Click number(s) that sum to the number of stars</div>
        <div className="body">
          <div className="left">
            {gameOver ? <PlayAgain onClick={resetGame}/> : <StarsDisplay count={stars}/>}
          </div>
          <div className="right">
            {Array.from({length: maxNum}, (_, i) => 1+i).map (number =>
               <PlayNumber 
                  status={numberStatus(number)} 
                  key={number} 
                  number={number}
                  onClick={onNumberClick}
                />
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
  );
}
export default App;
