import React from 'react';
import { connect } from 'react-redux';
import { ConnectedGameSettings } from '../GameSettings/GameSettings';
import { ConnectedGameboard } from '../Gameboard/Gameboard';
import './Game.css';

const Game = ({
  status, startNewGame
}) => {

  return (
    <>
        {status==='setting'
          ? <ConnectedGameSettings />
          : <ConnectedGameboard startNewGame={startNewGame}/>
        }
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startNewGame() {
      ownProps.startNewGame();
    }
  }
}
export const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);