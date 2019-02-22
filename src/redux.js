import { createStore, applyMiddleware } from 'redux'
import { createActions, handleActions } from 'redux-actions'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { scene, camera, renderer } from './scene'

const actions = createActions({
    active: {
        create: piece => ({ piece }),
        rotate: (x, y, z) => ({ x, y, z }),
        translate: (x, y, z) => ({ x, y, z }),
        setRotation: (x, y, z) => ({ x, y, z }),
        setPosition: (x, y, z) => ({ x, y, z }),
        lock: undefined,
    },
    score: {
        add: amt => ({ amt }),
        clear: undefined,
    },
    clearPlanes: undefined,
    applyGravity: undefined,
})

const reducer = handleActions(
    {
        [actions.active.create]: (state, { payload: { piece } }) => {
            return {
                ...state,
                active: {
                    ...state.active,
                    piece,
                },
            }
        },
        [actions.active.rotate]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                active: {
                    ...state.active,
                    rotation: {
                        x: (state.active.rotation.x + x) % (2 * Math.PI),
                        y: (state.active.rotation.y + y) % (2 * Math.PI),
                        z: (state.active.rotation.z + z) % (2 * Math.PI),
                    },
                },
            }
        },
        [actions.active.translate]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                active: {
                    ...state.active,
                    translation: {
                        x: state.active.translation.x + x,
                        y: state.active.translation.y + y,
                        z: state.active.translation.z + z,
                    },
                },
            }
        },
        [actions.active.setRotation]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                active: {
                    ...state.active,
                    rotation: {
                        x,
                        y,
                        z,
                    },
                },
            }
        },
        [actions.active.setPosition]: (state, { payload: { x, y, z } }) => {
            return {
                ...state,
                active: {
                    ...state.active,
                    translation: {
                        x,
                        y,
                        z,
                    },
                },
            }
        },

        /* eslint-disable */
        [actions.active.lock]: state => {},
        /* eslint-enable */
        [actions.score.add]: (state, { payload: amt }) => {
            return {
                ...state,
                score: state.score + amt,
            }
        },
        [actions.score.clear]: state => {
            return {
                ...state,
                score: 0,
            }
        },
        /* eslint-disable */
        [actions.clearPlanes]: state => {},
        [actions.applyGravity]: state => {},
        /* eslint-enable */
    },
    // Default (initial) state
    {
        active: {
            piece: '',
            rotation: { x: 0, y: 0, z: 0 },
            translation: { x: 0, y: 0, z: 0 },
        },
        score: 0,
        locked: [],
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
