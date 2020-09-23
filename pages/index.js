import React from 'react'
import Link from 'next/link'
import axios from 'axios'

import GetLink from '../SharedComponents/DynamicRouter'
import '../style.css'

function App() {
    return (
        <div>
            <p>Hello from Next.js</p>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <br />
            <Link href='/ReduxDemo'>
                <a>Redux Demo</a>
            </Link>
            <GetLink title={'Page 1'} shortUrl={'page-1'} className={'img p1'} />
            <GetLink title={'Page 2'} shortUrl={'page-2'} className={'img p2'} />
            <GetLink title={'Page 3'} shortUrl={'page-3'} className={'img p3'} />

            <table>
                {
                    Object.keys(this.props.data).map((key, index) => (
                        <tr key={index}>
                            <td>{key}:</td>
                            <td>{this.props.data[key]}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

App.getInitialProps = async (ctx) => {
    const res = await axios.get('http://localhost:3000/api/TestAPI')
    try {

        return {
            data: res.data,
            error: null
        }
    } catch (err) {
        return {
            data: '',
            error: err
        }
    }
}

export default App