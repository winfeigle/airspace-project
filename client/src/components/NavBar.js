import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';
import LightLogo from '../light-logo.svg';


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
                       <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <Button variant="info"     className="ms-3" href="/account">
                        My Account
                    </Button>
                    <Button 
                        className="ms-2 mt-3 mb-3" variant="outline-info" 
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
          <Navbar.Brand href="/">
            <img
                id='nav-logo'
              alt="airspace logo"
              src={LightLogo}
              width="120"
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