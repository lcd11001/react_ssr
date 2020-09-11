import React from 'react'
import Link from 'next/link'

import GetLink from '../SharedComponents/DynamicRouter'

function App() {
    return (
        <div>
            <style jsx global>
                {`
                    a {
                        color: blue;
                    }
                    .img {
                        width: 64px;
                        height: 64px;
                        background-size: cover !important;
                        background-repeat: no-repeat !important;
                        background-position: center !important;
                        border: 1px solid black;
                        border-radius: 10px;
                        display: inline-block;
                        margin-top: 10px;
                    }
                    .p1 {
                        background: url(/Icons/angry.png)
                    }
                    .p2 {
                        background: url(/Icons/happy.png)
                    }
                    .p3 {
                        background: url(/Icons/love.png)
                    }
                `}
            </style>
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