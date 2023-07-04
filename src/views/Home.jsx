import React, { useContext } from 'react'
import {UserContext, UserProvider} from './context/User'
import AuthUser from './auth/AuthenticatedUser'

function User(params) {
    const user = useContext(UserContext)
    return (
        <h1>
            hai {user.name}
        </h1>
    )
}

export default function Home(params) {
    return(
        <div className='container'>
            <UserProvider>
                <AuthUser/>
            </UserProvider>
        </div>
    )
}