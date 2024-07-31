import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import zabsfood5 from "../../../images/zabsfood5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/"><img height={80} src={zabsfood5} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} href="about"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="login">Login</Nav.Link>
                    <Nav.Link className='bg-dark rounded text-white p-2' eventKey={2} as={Link} to="registration">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
};

export default Header;