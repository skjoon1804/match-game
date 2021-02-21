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
    status(status = "setting", action) {
        switch (action.type) {
            case 'SET_STATUS':
                return action.status;
            default:
                return status;
        }
    },
    time(time = 0, action) {
        switch (action.type) {
            case 'SET_TIME':
                return action.time;
            default:
                return time;
        }
    },
    stars(stars = 0, action) {
        switch (action.type) {
            case 'SET_STARS':
                return action.stars;
            default:
                return stars;
        }
    },
    score(score = 0, action) {
        switch (action.type) {
            case 'SET_SCORE':
                return action.score;
            case 'ADD_SCORE':
                return score + action.score;
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
    easy(easy=[], action) {
        switch (action.type) {
            case 'SET_STATE':
                return action.state.record.find(e => e.level === 'easy').record;
            case 'ADD_EASY_RECORD':
                const easyTemp = [...easy, {level: action.level, name: action.name, score: action.score}];
                easyTemp.sort((a, b) => { return b.score - a.score; })
                return (easyTemp.length > 10) ? easyTemp.slice(0, -1) : easyTemp;
            default:
                return easy;
        }
    },
    medium(medium=[], action) {
        switch (action.type) {
            case 'SET_STATE':
                return action.state.record.find(e => e.level === 'medium').record;
            case 'ADD_MEDIUM_RECORD':
                const mediumTemp = [...medium, {level: action.level, name: action.name, score: action.score}];
                mediumTemp.sort((a, b) => { return b.score - a.score; })
                return (mediumTemp.length > 10) ? mediumTemp.slice(0, -1) : mediumTemp;
            default:
                return medium;
        }
    },
    hard(hard=[], action) {
        switch (action.type) {
            case 'SET_STATE':
                return action.state.record.find(e => e.level === 'hard').record;
            case 'ADD_HARD_RECORD':
                const hardTemp = [...hard, {level: action.level, name: action.name, score: action.score}];
                hardTemp.sort((a, b) => { return b.score - a.score; })
                return (hardTemp.length > 10) ? hardTemp.slice(0, -1) : hardTemp;
            default:
                return hard;
        }
    },
    crazy(crazy=[], action) {
        switch (action.type) {
            case 'SET_STATE':
                return action.state.record.find(e => e.level === 'crazy').record;
            case 'ADD_CRAZY_RECORD':
                const crazyTemp = [...crazy, {level: action.level, name: action.name, score: action.score}];
                crazyTemp.sort((a, b) => { return b.score - a.score; })
                return (crazyTemp.length > 10) ? crazyTemp.slice(0, -1) : crazyTemp;
            default:
                return crazy;
        }
    }
})
export default reducer;