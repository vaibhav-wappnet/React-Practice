import React from 'react'
import { useState, useRef, useContext } from 'react';
import "../Styles/FormStyle.css"
import UserContext from '../context/UserContext';

const LoginForm = () => {

    const { login } = useContext(UserContext)
    const [userName, setUserName] = useState("");

    const inputRef = useRef();

    const changeHandler = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName("");
        console.log("submitted");
        console.log("username : ", userName);

        console.log(userName.length);
        if (userName === "") {
            return alert("Please enter your username")
        }
        else {
            return null;
        }
        // userName.length === null ? alert("Please enter your username") : console.log(userName);
    }
    return (
        <div>
            <div className="container">
                <h1>Login Form</h1>
                <form action="" className="form-container" onSubmit={() => { handleSubmit(userName) }}>
                    <label htmlFor="text">Username : </label>
                    <input type="text"
                        ref={inputRef}
                        placeholder="Enter username"
                        onChange={changeHandler}
                        value={userName}
                    />
                    <button className="btn btn-submit" onClick={() => login(userName)}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;