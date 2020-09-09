import React from 'react'
import Link from 'next/link'

function App() {
    return (
        <div>
            <p>Hello from Next.js</p>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </div>
    )
}

export default App