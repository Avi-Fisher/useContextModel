import React, { createContext, useState } from 'react'

const UserContext = createContext()

function UserProvide({ children }) {

    const [name, setName] = useState("Alice2")
    
    return (
        <UserContext value={{ name, setName }}>
            {children}
        </UserContext>
    )
}

export { UserContext, UserProvide }
