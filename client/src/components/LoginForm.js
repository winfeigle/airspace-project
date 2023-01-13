import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';




function LoginForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            }
        })
        // Use setLoading response.ok and setLoading to determine whether or not to log in the user...
    }

    return(
    <Card className="mx-auto my-5" style={{ width: '18rem' }}>
        <Card.Header>Please log in</Card.Header>
        <Form className="p-3" onSubmit={handleLogin}>
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
            <Button 
                className="mt-3 my-auto"
                variant="info" 
                type="submit"
                >Login
            </Button>
        </Form>
    </Card>
    );
}

export default LoginForm;