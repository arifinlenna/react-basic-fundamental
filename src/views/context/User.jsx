import React, { createContext } from 'react'

const UserContext = createContext();


function UserProvider({children}) {
    const user = {
        name:'Nur Arifin'
    }


    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}