import React from "react";

import './styles.css';
import { useState } from 'react';

const LoginPage = () =>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handlesubmit =(e)=>{
        e.preventDefault();

        console.log("submit",{email,password});
    };
    return (
    <div id="login">
        <h1 className="title">login do sistema</h1>
        <form className="form" onSubmit={handlesubmit}>
            <div className="field">
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" />
                
            </div>
            <div className="field">
                <label htmlFor="password">Senha:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password"/>

            </div>
            <div className="submit">
                <button type="submit"> entrar </button>
            </div>
        </form>
    </div>
        )
};

export default LoginPage;