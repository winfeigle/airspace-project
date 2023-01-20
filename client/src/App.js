import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Spaces from "./pages/Spaces";
import SpaceListing from "./pages/SpaceListing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Account from "./pages/Account";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser({
          id: user.id,
          username: user.username
        }));
      }
    });
  }, []);


  return (
    <div className="App">
      <div id='navbar'>
        <NavBar 
          user={user}
          setUser={setUser}
          />
      </div>
        
        { !user ? <Login onLogin={setUser} /> : 
        <Routes>
        
          <Route 
            path="/" 
            element={<Spaces />} 
            />
            <Route 
            path="/my-account" 
            element={<Account />} 
            />
            <Route 
            path="/spaces/:id" 
            element={<SpaceListing user={user}/>} 
            />
            
        </Routes>
        }
        {user ? <Footer /> : null}
    </div>
  );
}

export default App;
