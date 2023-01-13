import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NavBar from "./components/NavBar";


function App() {



  return (
    <div className="App">
      <NavBar />
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
    </div>
  );
}

export default App;
