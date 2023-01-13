import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form onSubmit="">
           <label>Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <label>Password</label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <Button 
                type="submit" 
                variant="light" 
                // active/disabled
                >
                Login
                </Button>
        </form>
    );
}

export default LoginForm;