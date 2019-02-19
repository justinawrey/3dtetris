import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger({ collapsed: true }))
)

const observeStore = (select, onChange) => {
    let currentState

    const handleChange = () => {
        let nextState = select(store.getState())
        if (nextState !== currentState) {
            currentState = nextState
            onChange(currentState)
        }
    }

    let unsubscribe = store.subscribe(handleChange)
    handleChange()
    return unsubscribe
}

const { dispatch } = store

export { observeStore, dispatch }
