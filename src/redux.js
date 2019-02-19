import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const board = (state = [], action) => {}
const piece = (state = "", action) => {}
const orientation = (state = "", action) => {}

const rootReducer = combineReducers({
    board,
    piece,
    orientation
}) 

const store = createStore(rootReducer, applyMiddleware(createLogger({collapsed: true})))

export {store}