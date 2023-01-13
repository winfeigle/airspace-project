import './App.css';
import React from "react";
import LightLogo from './light-logo.svg'
// import DarkLogo from './dark-logo.svg'
import LoginForm from './components/LoginForm';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={LightLogo} alt="Airspace logo" className="app-logo"/>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
