import { InitialState } from '../Actions/action'

export const reducer = (state = InitialState, action) => {
    if (action.type === 'ChangeLabel') {
        return Object.assign({}, state, {
            text: action.text
        })
    }

    return state
}