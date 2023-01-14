import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
    <Card className="mx-auto my-5" style={{ width: '25rem' }}>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey={showLogin ? "#login" : "#signup"}>
          <Nav.Item>
            <Nav.Link href="#login" onClick={() => setShowLogin(!showLogin)}>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#signup" onClick={() => setShowLogin(!showLogin)}>Signup</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>{ showLogin ? "Welcome back" : "Create Account"}</Card.Title>
        <Card.Text>
        { showLogin ? <LoginForm onLogin={onLogin} />  : <SignupForm onLogin={onLogin} /> }
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default Login;