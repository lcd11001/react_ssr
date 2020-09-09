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
            <GetLink title={'Page 1'} shortUrl={'page-1'} />
            <GetLink title={'Page 2'} shortUrl={'page-3'} />
            <GetLink title={'Page 3'} shortUrl={'page-3'} />
        </div>
    )
}

export default App