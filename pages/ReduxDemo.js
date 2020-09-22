import React from 'react'
import '../style.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState, InitialState } from '../Actions/action'

class ReduxDemo extends React.Component {
    static async getInitialProps(ctx) {
        return {
            initialState: InitialState
        }
    }

    render() {
        return (
            <div>
                <h1>Redux Demo</h1>
                <br />
                <div className={'center'}>
                    <input id='inputTextbox' type='text' />
                    <button type='button' onClick={() => this.props.changeState(document.getElementById('inputTextbox').value)}>
                        Update label
                    </button>
                </div>
                <br />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState: bindActionCreators(changeState, dispatch)
    }
}

const mapStateToProps = state => {
    // console.log('mapStateToProps', state)
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
// export default ReduxDemo