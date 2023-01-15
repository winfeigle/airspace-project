import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function LoginForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        // setLoading(true)

        fetch('/login', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({ username, password })
        }).then(res => {
            if(res.ok){
                res.json().then((user) => onLogin(user))
            } else{
                res.json().then((err) => setError(`${Object.keys(err)}: ${Object.values(err)}`))
            }
        })
    }

    return(
    <Form className="my-3" onSubmit={handleLogin}>
        <FloatingLabel
            className="mb-3"
            controlId="floatingInput"
            label="Username"
            >
                <Form.Control 
                    type="text" 
                    placeholder="name@example.com" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
        </FloatingLabel>
        <FloatingLabel 
            controlId="floatingPassword" 
            label="Password"
            >
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
        </FloatingLabel>

        {
            error ? 
            <div className="errors-container">
                <span id="error-message">{error}</span>
            </div> 
            : null 
        }

        <div className="d-grid gap-2">
            <Button 
                className="mt-3 my-auto"
                variant="info" 
                type="submit"
                >Login
            </Button>
        </div>
    </Form>
    );
}

export default LoginForm;