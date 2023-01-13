import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import SignupForm from './components/SignupForm';
import NavBar from "./components/NavBar";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const login = (loginUser) => {
    setUser(loginUser)
  }


  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser}
        />
      <Routes>
            <Route 
              path="/" 
              element={
                <Login 
                  onLogin={login}
                  />
              } 
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
