import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { scene, camera, renderer } from './scene'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
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

export { observeStore, dispatch }
