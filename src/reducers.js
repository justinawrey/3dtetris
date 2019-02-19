import { combineReducers } from 'redux'
import { rotationActions, translationActions } from './actions'

// eslint-disable-next-line
const activePiece = (state = '', action) => {
    return state
}

const activeTranslation = (state = { x: 0, y: 0, z: 0 }, action) => {
    const { x, y, z } = state
    const { x: byX, y: byY, z: byZ } = action.by || { x: 0, y: 0, z: 0 }

    switch (action.type) {
        case translationActions.TRANSLATE:
            return {
                x: x + byX,
                y: y + byY,
                z: z + byZ,
            }
        default:
            return state
    }
}

const activeRotation = (state = { x: 0, y: 0, z: 0 }, action) => {
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
    activeRotation,
    activeTranslation,
})
