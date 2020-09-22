import { InitialState } from '../Actions/action'
import { HYDRATE } from 'next-redux-wrapper'

export const reducer = (state = InitialState, action) => {
    // console.log('reducer', action, 'state', state)
    if (action.type === HYDRATE) {
        return Object.assign({}, state, action.payload)
    }

    if (action.type === 'ChangeLabel') {
        return Object.assign({}, state, {
            text: action.text
        })
    }

    return state
}

export default reducer