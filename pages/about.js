import React from 'react'
import Link from 'next/link'

function About() {
    return (
        <div>
            <p>This is a demo of SSR</p>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default About