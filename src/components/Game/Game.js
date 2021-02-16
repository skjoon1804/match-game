import './Game.css';
import React, {useEffect, useState} from 'react';

import StarsDisplay from '../StarDisplay/StarsDisplay';
import PlayNumber from '../PlayNumber/PlayNumber';
import PlayAgain from '../../PlayAgain/PlayAgain';
import GameSettings from '../GameSettings/GameSettings';
import Leaderboard from '../Leaderboard/Leaderboard'
import utils from '../../utils'

const useGameState = () => {
  let maxNum = 9;
  let timerTime = 30;
  const [stars, setStars] = useState(utils.random(1, maxNum));
  const [availableNums, setAvailableNums] = useState(utils.range(1, maxNum));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(timerTime);

  useEffect(() => {
    if (secondsLeft>0 && availableNums.length>0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft-1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  })

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
      setStars(utils.randomSumIn(newAvailableNums, maxNum));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };
  return {maxNum, stars, availableNums, candidateNums, secondsLeft, setGameState};
};

const Game = (props) => {
  const {
    maxNum, 
    stars,
    availableNums, 
    candidateNums,
    secondsLeft, 
    setGameState,
  } = useGameState();


  const gameStatus = availableNums.length === 0 
      ? 'won'
      : secondsLeft === 0 ? 'lost' : 'active';

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

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return ;
    }
    const newCandidateNums = 
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn!==number);

    setGameState(newCandidateNums);
  };

  return (
    <>
      <div className="game my-5 mx-auto h-5">
        <div className="help">Click number(s) that sum to the number of stars</div>
        <>
          <div className="body">
            <div className="left">
              {gameStatus!=='active' ? <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/> : <StarsDisplay count={stars}/>}
            </div>
            <div className="right">
              {utils.range(1, maxNum).map(number =>
                <PlayNumber 
                    status={numberStatus(number)} 
                    key={number} 
                    number={number}
                    onClick={onNumberClick}
                  />
              )}
            </div>
          </div>
          <div className="timer">Time Remaining: {secondsLeft}</div>
        </>
        </div>
        <Leaderboard />
    </>
  );
}
export default Game;


// Easy - 25sec, 9 stars
// Medium - 20sec, 12 stars
// Hard - 20sec, 15stars
// Crazy - 15sec, 30stars
