import React from 'react'
import "../Styles/FormStyle.css"
import { useContext } from "react";
import UserContext from "../context/UserContext"

const Logged = () => {

    const { user, logout } = useContext(UserContext);

    return (

        <div className="container">
            <h1>
                Welcome {user.userName}!
            </h1>
            <button className="btn btn-submit" onClick={logout}>Logout</button>
        </div>
    )
}

export default Logged