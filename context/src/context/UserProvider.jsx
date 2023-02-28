import React, { useState } from 'react'
import UserContext from "./UserContext";


const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        userName: "",
        auth: false
    });

    const login = (userName) => {
        if (userName === "") {
            alert("please enter your username")
            return setUser(() => ({
                userName: "",
                auth: false
            }));
        }
        else {
            return setUser(() => ({
                userName: userName,
                auth: true
            }))
        }
    }

    const logout = () => {
        setUser(() => ({
            userName: "",
            auth: false
        }))
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>

    )
}
export default UserProvider;