import { withRouter } from 'next/router'

const SecondPage = (props) => {
    // console.log(props)
    return (
        <h1>
            Welcome to {props.router.query.content}
        </h1>
    )
}

export default withRouter(SecondPage)