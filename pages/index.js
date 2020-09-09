import React from 'react'
import Link from 'next/link'

import GetLink from '../SharedComponents/DynamicRouter'

function App() {
    return (
        <div>
            <p>Hello from Next.js</p>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <GetLink title={'Page 1'} />
            <GetLink title={'Page 2'} />
            <GetLink title={'Page 3'} />
        </div>
    )
}

export default App