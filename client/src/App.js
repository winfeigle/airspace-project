import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import LightLogo from './light-logo.svg'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={LightLogo} alt="Airspace logo" className="app-logo"/>
        <Routes>
            <Route 
              path="/" 
              element={<LoginForm />} 
              />
            <Route 
              path="signup" 
              element={<SignupForm />} 
              />
          </Routes>
      </header>
    </div>
  );
}

export default App;
