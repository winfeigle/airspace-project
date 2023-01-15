import React from "react";
import DarkLogo from '../dark-logo.svg';

function Footer(){

    return(
        <div style={{backgroundColor: "white", height: "80px", marginTop: "150px", padding: "25px", display:"flex", justifyContent: "space-evenly"}}>
            <img src={DarkLogo} style={{width: "120px", opacity: "20%"}}/>
            <p style={{opacity: "25%"}}>Created by <a href="https://github.com/winfeigle" target="_blank" style={{ color: "black"}}>Win Feigle</a></p>
        </div>
    )
}

export default Footer;