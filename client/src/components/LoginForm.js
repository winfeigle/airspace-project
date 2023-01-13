import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false)

    console.log(`Username: ${username}, Password: ${password}`)

    const handleSubmit = (e) => {
        e.preventDefault()
        // setLoading(true)

        fetch('/login', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
        .then(console.log)
        // Use setLoading response.ok and setLoading to determine whether or not to log in the user...
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3 mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </Form.Group>

            <Button variant="info" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default LoginForm;