import React from 'react'
import '../style.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState } from '../Actions/action'

class ReduxDemo extends React.Component {
    // static getInitialProps({store}) {
        
    // }

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <h1>Redux Demo</h1>
                <br />
                <div className={'center'}>
                    <input id='inputTextbox' type='text' />
                    <button type='button' onClick={this.props.changeState}>
                        Update label
                    </button>
                </div>
                <br />
                <p>{this.state.text}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState: bindActionCreators(changeState, dispatch)
    }
}

const mapStateToProps = state => ({
    text: state.text
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)