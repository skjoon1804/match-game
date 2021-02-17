import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import utils from '../../utils'
import { setGame, setStatus } from '../../actions'
import { ConnectedPlayAgain } from '../PlayAgain/PlayAgain';
import Leaderboard from '../Leaderboard/Leaderboard';
import { ConnectedTimer } from '../Timer/Timer';
import StarsDisplay from '../StarDisplay/StarsDisplay';
import PlayNumber from '../PlayNumber/PlayNumber';

const Gameboard = ({
    game, status, time, maxStars, score, level,
    startNewGame
}) => {

    const [stars, setStars] = useState(utils.random(1, maxStars));
    const [availableNums, setAvailableNums] = useState(utils.range(1, maxStars));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(time);
  
    useEffect(() => {
      if (secondsLeft>0 && availableNums.length>0 && gameStatus==='active') {
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
        setStars(utils.randomSumIn(newAvailableNums, maxStars));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };
  
  
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
  
    const onNumberClick = (number, numberStatus) => {
      if (gameStatus !== 'active' || numberStatus === 'used') {
        return ;
      }
      const newCandidateNums = 
        numberStatus === 'available'
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
                {gameStatus!=='active'
                ? <ConnectedPlayAgain onClick={() => startNewGame(game)} gameStatus={gameStatus} className="justify-content-center"/> 
                :   <>
                      <div className="left">
                        <StarsDisplay count={stars}/>
                      </div>
                      <div className="right">
                        {utils.range(1, maxStars).map(number =>
                          <PlayNumber 
                              status={numberStatus(number)} 
                              key={number} 
                              number={number}
                              onClick={onNumberClick}
                            />
                        )}
                      </div>
                    </>
                }
              </div>
              <ConnectedTimer secondsLeft={secondsLeft}/>
            </>
          </div>
          {gameStatus === 'active' ? null : <Leaderboard />}
        </>
    );
}

const mapStateToProps = (state) => {
  let { game, status, time, stars, score, level } = state;
  let maxStars = stars;
  return { game, status, time, maxStars, score, level };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startNewGame(game) {
          dispatch(setGame(game+1));
          dispatch(setStatus("setting"));
          ownProps.startNewGame();
        }
      }
}

export const ConnectedGameboard = connect(mapStateToProps, mapDispatchToProps)(Gameboard);