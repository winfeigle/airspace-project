import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

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