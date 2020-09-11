import React from 'react'
import Link from 'next/link'

import GetLink from '../SharedComponents/DynamicRouter'
import '../style.css'

function App() {
    return (
        <div>
            <p>Hello from Next.js</p>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <GetLink title={'Page 1'} shortUrl={'page-1'} className={'img p1'} />
            <GetLink title={'Page 2'} shortUrl={'page-3'} className={'img p2'} />
            <GetLink title={'Page 3'} shortUrl={'page-3'} className={'img p3'} />
        </div>
    )
}

export default App