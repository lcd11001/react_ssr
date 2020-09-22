import React from 'react'
import { wrapper } from '../Store/store'

const WrappedApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

