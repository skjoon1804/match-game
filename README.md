# Smiley Match

[Smiley Match](https://matchgame1.herokuapp.com/) is a number-shape matching game web application inspired by the card game of Cribbage.
It is built using React.js/Redux on the frontend and Node.js on the backend to communicate leaderboard and score data stored on MongoDB

Smiley Match is a personal project by Anderson Kwon.

![flow 1](https://media.giphy.com/media/dminl6dSBFF42Qa6u4/giphy.gif)

![flow 2](https://media.giphy.com/media/BKswWag7XSHroQXChZ/giphy.gif)

## Features

- Hover for game instruction
- 4 level selections which differ in difficulties and time given
- Scoreboard to keep track of current level and current score
- Gameboard to display dynamic smileys and number cards
- Timer that keeps track of time remaining
- Leaderboard that keeps track of Top 10 scores for each levels
- Option to save score if game is completed

## Product Design

Smiley Match was designed an built in two weeks

- [Sample State](https://github.com/skjoon1804/match-game/blob/main/src/server/defaultState.js)
- Database Schema

## Technology

- Frontend
  - React.js & Redux
    - Used to keep component renders organized and reusable: action, util, reducers, and store
  - CSS & Bootstrap
    - Used to style
  - Others: ReactDOM, Babel, Webpack
- Backend

  - Node.js
    - Keep track of the Top 10 scores in sorted order
    ```javascript
    if (size > 10) {
      let sorted = updated[0].record.sort((a, b) => {
        return b.score - a.score;
      });
      let min = sorted[sorted.length - 1];
      await collection.updateOne(
        { level },
        { $pull: { record: { name: min.name, score: min.score } } }
      );
    }
    ```
  - MongoDB

- Heroku for hosting
