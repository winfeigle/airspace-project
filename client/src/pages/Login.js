import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Button from 'react-bootstrap/Button';

function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            { showLogin ? 
                <LoginForm 
                    onLogin={onLogin} 
                    /> 
                : 
                <SignupForm 
                />
            }
        </div>
    )
}

export default Login;