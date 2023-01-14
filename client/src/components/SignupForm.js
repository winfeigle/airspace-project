import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function SignupForm({ onLogin }){
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
        }).then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
            //   r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return(
    <Form className="my-3" onSubmit={handleSignup}>
        <FloatingLabel
            className="mb-3"
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
        <div className="d-grid gap-2">
            <Button 
                className="mt-3"
                variant="info" 
                type="submit"
                >Signup
            </Button>
        </div>
    </Form>
    );
}

export default SignupForm;