import './App.css';
import React from "react";
import logo from './airspace-logo.png'
import LoginForm from './components/LoginForm';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Airspace logo" className="app-logo"/>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
