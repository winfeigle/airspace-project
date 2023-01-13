import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Form>
            <Form.Group className="mt-3 mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="username" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="••••••••" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Button variant="info" type="submit">
                Submit
            </Button>
        </Form>
        // <form onSubmit="">
        //    <label>Username</label>
        //     <input
        //         type="text"
        //         id="username"
        //         autoComplete="off"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //         />
        //     <label>Password</label>
        //     <input
        //         type="password"
        //         id="password"
        //         autoComplete="off"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         />
        //     <Button 
        //         type="submit" 
        //         variant="light" 
        //         // active/disabled
        //         >
        //         Login
        //         </Button>
        // </form>
    );
}

export default LoginForm;