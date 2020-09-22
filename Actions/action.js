export const InitialState = {
    text: 'Initial label value'
}

export const changeState = (newText) => dispatch => {
    return dispatch({
        type: 'ChangeLabel',
        text: newText
    })
}