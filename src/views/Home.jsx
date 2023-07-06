import React from 'react'
import {UserProvider} from './context/Post'
import AuthUser from './PostUser'

export default function Home(params) {
    return(
        <div className='container'>
            <UserProvider>
                <AuthUser/>
            </UserProvider>
        </div>
    )
}