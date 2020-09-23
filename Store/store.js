import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from '../Reducers/reducer'
import { InitialState } from '../Actions/action'
import { createWrapper } from 'next-redux-wrapper'

export const initStore = (initialState = InitialState) => {
    let store = createStore(
        reducer,
        initialState,
        process.env.NODE_ENV !== 'production'
            ? composeWithDevTools(applyMiddleware(thunkMiddleware))
            : applyMiddleware(thunkMiddleware)
    )

    // console.log('initStore', initialState, 'store', store)
    return store
}

export const wrapper = createWrapper(initStore, { debug: false /*process.env.NODE_ENV === 'development'*/ })
