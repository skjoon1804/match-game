import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import utils from '../utils'
import { setGame, setStatus, addScore } from '../../actions'
import { ConnectedPlayAgain } from '../PlayAgain/PlayAgain';
import { ConnectedLeaderboard } from '../Leaderboard/Leaderboard';
import { ConnectedTimer } from '../Timer/Timer';
import StarsDisplay from '../StarDisplay/StarsDisplay';
import PlayNumber from '../PlayNumber/PlayNumber';
import { ConnectedScoreboard } from '../Scoreboard/Scoreboard';
import './Gameboard.css'

const Gameboard = ({
    game, status, time, maxStars, score, level,
    startNewGame, setStatus, addScore
}) => {

    const [stars, setStars] = useState(utils.random(1, maxStars));
    const [availableNums, setAvailableNums] = useState(utils.range(1, maxStars));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(time);
  
    useEffect(() => {
      if (secondsLeft>0 && availableNums.length>0 && status==='active') {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft-1);
        }, 1000);
        return () => clearTimeout(timerId);
      } else if (secondsLeft === 0) {
          setStatus("lost");
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

        let numAnswers = newCandidateNums.length;   // Weigh more scores if more combinations used for one number
        addScore(numAnswers ** 2 * 100);

        if (newAvailableNums.length === 0) {
            setStatus("won");
            addScore(secondsLeft * 100);            // Add bonus score based on time left
        } else {
            secondsLeft === 0 ? setStatus("lost") : setStatus("active");
        }
      }
    };
  
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
      if (status !== 'active' || numberStatus === 'used') {
        return ;
      }
      const newCandidateNums = 
        numberStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn!==number);

      setGameState(newCandidateNums);
    };

    const setGameSize = () => {
      if (maxStars === 9) { // 3 x 3
        return '500px';
      } else if (maxStars === 16) { // 4 x 4
        return '700px';
      } else if (maxStars === 25) { // 5 x 5
        return '800px'; 
      }
    }

    return (
        <>
          <div className="game my-5 mx-auto h-5" style={{maxWidth: setGameSize()}}>
            <ConnectedScoreboard />
            <>
              <div className="body mx-auto my-2 container">
                {status!=='active'
                ? <ConnectedPlayAgain onClick={() => startNewGame(game)} gameStatus={status} className="justify-content-center"/> 
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
            </>
            <ConnectedTimer secondsLeft={secondsLeft}/>
          </div> 
          {status === 'active' ? null : <ConnectedLeaderboard />}
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
        },
        setStatus(status) {
            dispatch(setStatus(status));
        },
        addScore(score) {
            dispatch(addScore(score));
        }
      }
}

export const ConnectedGameboard = connect(mapStateToProps, mapDispatchToProps)(Gameboard);