import { combineReducers } from 'redux'
import { rotationActions } from './actions'

// eslint-disable-next-line
const board = (state = [], action) => {
    return state
}

// eslint-disable-next-line
const piece = (state = '', action) => {
    return state
}

const rotation = (state = { x: 0, y: 0, z: 0 }, action) => {
    const { x, y, z } = state
    const { x: byX, y: byY, z: byZ } = action.by || { x: 0, y: 0, z: 0 }

    switch (action.type) {
        case rotationActions.ROTATE:
            return {
                x: (x + byX) % (2 * Math.PI),
                y: (y + byY) % (2 * Math.PI),
                z: (z + byZ) % (2 * Math.PI),
            }
        default:
            return state
    }
}

export default combineReducers({
    board,
    piece,
    rotation,
})
