import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';

function SignupForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
        // setLoading(true)

        fetch('/signup', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({ username, password })
        })
    }

    return(
    <Card className="mx-auto my-5" style={{ width: '18rem' }}>
            <Card.Header>Sign up now</Card.Header>
        <Form className="p-3" onSubmit={handleSignup}>
            <FloatingLabel
                className="mt-3 mb-3"
                controlId="floatingInput"
                label="Username"
                >
                    <Form.Control 
                        type="text"
                        placeholder="Username" 
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
            <FloatingLabel 
                className="mt-3"
                controlId="floatingConfirmPassword" 
                label="Confirm Password"
                >
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
            </FloatingLabel>
            <Button 
                className="mt-3"
                variant="info" 
                type="submit"
                >Create Account
                </Button>
        </Form>
    </Card>
    );
}

export default SignupForm;