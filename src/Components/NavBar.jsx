import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Sophia Rojas Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Print Shop" id="printshop-dropdown">
              <NavDropdown.Item as={Link} to="/printshop/south-africa">
                South Africa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/printshop/nebraska">
                Nebraska
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/printshop/north-america">
                North America<span className="coming-soon-tag">Coming Soon</span>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/printshop/madagascar">
                Madagascar<span className="coming-soon-tag">Coming Soon</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;