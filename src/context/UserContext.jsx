import { createContext, useState } from "react";


export const UserStore = createContext()

export const UserProvider = ({children}) =>{
    const [userSession,setUserSession] = useState(localStorage.getItem("userSession") ? JSON.parse(localStorage.getItem("userSession")) : null)
    const [users,setUsers] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])
    return (
        <UserStore.Provider value = {{users, setUsers, userSession, setUserSession}}>
            {children}
        </UserStore.Provider>
    )
}