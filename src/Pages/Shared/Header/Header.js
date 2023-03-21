import React from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <>
      <Navbar sticky="top" bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container>
                    <Navbar.Brand href="#home">Geneius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end"> 
                  <Stack direction="horizontal" gap={3}>
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link> 
                {user?.email ?
                  <Button onClick={logOut} variant="light">LogOut</Button>:
                  <Nav.Link as={HashLink} to='/login'>LogIn</Nav.Link>
                }
                                       
          <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName }</a>
          </Navbar.Text>
                        </Stack>    
         
        </Navbar.Collapse>
          
        </Container>
      </Navbar>      
    </>



     
    );
};

export default Header;