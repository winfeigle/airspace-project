import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Spaces from "./pages/Spaces";
import NavBar from "./components/NavBar";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser}
        />
        
        { !user ? <Login onLogin={setUser} /> : 
          <Routes>
        
          <Route 
            path="/" 
            element={<Spaces />} 
            />
        </Routes>
        }
    </div>
  );
}

export default App;
