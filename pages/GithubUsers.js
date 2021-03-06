import React from 'react'
import axios from 'axios'
import '../style.css'
import Link from 'next/link'

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get('https://api.github.com/users')
            return {
                data: res.data
            }
        } catch (e) {
            return {
                error: e
            }
        }
    }

    render() {
        if (this.props.error) {
            return (
                <div className={'UserError'}>
                    Error: {this.props.error.message}
                </div>
            )
        }

        return (
            <div>
                <h1>Github Users</h1>
                <br />
                {
                    this.props.data.map((item, index) => (
                        <div key={index} className={'UserBlock'}>
                            <Link href={{
                                pathname: '/GithubUser',
                                query: {
                                    id: item.login
                                }
                            }}>
                                <div>
                                    <img className={'img'} src={item.avatar_url} alt={'user icon'} />
                                    <div className={'UserDetail'}>
                                        <p>Username: {item.login}</p>
                                        <p>ID: {item.id}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}