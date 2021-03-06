import React from 'react'
import Link from 'next/link'

function GetLink(props) {
    return (
        <div>
            <div className={props.className}></div>
            <Link href={`/SecondPage?content=${props.title}`} as={props.shortUrl}>
                <a>{props.title}</a>
            </Link>
        </div>
    )
}

export default GetLink