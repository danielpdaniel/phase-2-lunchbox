import React, { useState } from "react";


function AdminLogin({ onAdminLogin, loginStatus }){
    
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleChange(e){
        switch(e.target.name){
        case "username":
            setUsernameInput(e.target.value)
            break
        case "password":
            setPasswordInput(e.target.value)
            break
        default:
            onAdminLogin(false);
        }
    }

    function handleLogin(e){
        e.preventDefault();
        
        if(usernameInput === "test"){
            if(passwordInput === "test"){
                onAdminLogin(true);
                setUsernameInput("");
                setPasswordInput("");
            }
        } else {
            alert("wrong username/pasword")
        }
    }

    function handleLogout(){
        onAdminLogin(false)
    }
    return (
        <div>
            <h2>login to DELETE these CRUEL JAPES</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="username" onChange={handleChange} value={usernameInput ? usernameInput : ""}/>
                <input type="text" name="password" placeholder="password" onChange={handleChange} value={passwordInput ? passwordInput : ""}/>
                {loginStatus ? <button onClick={handleLogout}>Logout</button> : <input type="submit" /> }
            </form>
        </div>
    )
}

export default AdminLogin