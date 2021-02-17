export const setGame = (game) => {
    return {
        type: 'SET_GAME',
        game
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}

export const setTime = (time) => {
    return {
        type: 'SET_TIME',
        time
    }
}

export const setStars = (stars) => {
    return {
        type: 'SET_STARS',
        stars
    }
}

export const setScore = (score) => {
    return {
        type: 'SET_SCORE',
        score
    }
}

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name
    }
}

export const setRecord = (name, score) => {
    return {
        type: 'SET_RECORD',
        name,
        score
    }
}

export const setLevel = (level) => {
    return {
        type: 'SET_LEVEL',
        level
    }
}