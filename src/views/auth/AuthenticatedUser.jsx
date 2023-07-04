import React, { useContext } from 'react'
import {UserContext} from '../context/User'


export default function AuthenticatedUser() {
    const user = useContext(UserContext)
    return (
        <div>{user.name}</div>
    )
}
