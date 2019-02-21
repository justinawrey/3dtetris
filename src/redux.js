import { createStore, applyMiddleware } from 'redux'
import { createActions, handleActions } from 'redux-actions'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { scene, camera, renderer } from './scene'

const actions = createActions({
    active: {
        // Fine-grained rotation and translation
        rotate: (x, y, z) => ({ x, y, z }),
        translate: (x, y, z) => ({ x, y, z }),
    },
})

const reducer = handleActions(
    {
        [actions.active.rotate]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                activeRotation: {
                    x: (state.activeRotation.x + x) % (2 * Math.PI),
                    y: (state.activeRotation.y + y) % (2 * Math.PI),
                    z: (state.activeRotation.z + z) % (2 * Math.PI),
                },
            }
        },
        [actions.active.translate]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                activeTranslation: {
                    x: state.activeTranslation.x + x,
                    y: state.activeTranslation.y + y,
                    z: state.activeTranslation.z + z,
                },
            }
        },
    },
    // Default (initial) state
    {
        activeRotation: { x: 0, y: 0, z: 0 },
        activeTranslation: { x: 0, y: 0, z: 0 },
    }
)

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })))
)

const observeStore = (select, onChange) => {
    let currentState

    const handleChange = () => {
        let nextState = select(store.getState())
        if (nextState !== currentState) {
            currentState = nextState
            onChange(currentState, { scene, camera, renderer })
        }
    }

    let unsubscribe = store.subscribe(handleChange)
    handleChange()
    return unsubscribe
}

const { dispatch } = store

export { observeStore, dispatch, actions }
