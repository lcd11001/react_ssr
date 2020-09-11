import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from '../Reducers/reducer'
import { InitialState } from '../Actions/action'

export const initStore = (defaultState = InitialState) => {
    return createStore(
        reducer,
        defaultState,
        applyMiddleware(thunkMiddleware)
    )
}