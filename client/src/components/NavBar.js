import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';
import LightLogo from '../light-logo.svg';
// import { redirect } from "react-router-dom";

function NavBar({ user, setUser }){

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        }).then(<redirect to="/" />)
    }

    const renderNavbarButtons = () => {
        if(user){
            return(
                <>
                    <Navbar.Text id="current-user-name">
                       Hey, <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <Button 
                        className="ms-4 mt-3 mb-3" variant="outline-light" 
                        onClick={handleLogout}
                        >Logout
                    </Button>
                </>
            );
        }
    }

    return(
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LightLogo}
              width="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {renderNavbarButtons()}
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavBar;