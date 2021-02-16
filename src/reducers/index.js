import { combineReducers } from 'redux';

const reducer = combineReducers({
    game(game = 1, action) {
        switch (action.type) {
            case 'SET_GAME':
                return action.game;
            default:
                return game;
        }
    },
    time(time = 10, action) {
        switch (action.type) {
            case 'SET_TIME':
                return action.time;
            default:
                return time;
        }
    },
    stars(stars = 9, action) {
        switch (action.type) {
            case 'SET_STARS':
                return action.time;
            default:
                return stars;
        }
    },
    score(score = 0, action) {
        switch (action.type) {
            case 'SET_SCORE':
                return action.score;
            default:
                return score;
        }
    },
    name(name = "", action) {
        switch (action.type) {
            case 'SET_NAME':
                return action.name;
            default:
                return name;
        }
    },
    level(level = "", action) {
        switch (action.type) {
            case 'SET_LEVEL':
                return action.level;
            default:
                return level;
        }
    },
    record(record={}, action) {
        switch (action.type) {
            case 'SET_RECORD':
                return action.record;
            default:
                return record;
        }
    }
})
export default reducer;