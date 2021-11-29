import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
            <Container>
                <Navbar.Brand href="#intro"><span  className="me">Sourab</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav className="nav">
                        <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                        <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
                        <Nav.Link className="nav-link" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1ve6S7Ky6rmaRFKUkt8ehHx03NdyhkN4h/view?usp=sharing"><button className=" header-button">Resume</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;