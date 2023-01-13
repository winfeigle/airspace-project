import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function Login({ onLogin }){

    return(
        <div>
            { true ? 
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