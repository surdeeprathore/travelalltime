import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Traveller
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link">ABOUT US</Nav.Link>
            <NavDropdown title="TOUR PACKAGES" id="basic-nav-dropdown" className="dropdown-hover">
              <NavDropdown.Item as={Link} to="/kashmir">Kashmir Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rajasthan">Rajasthan Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ladakh">Ladakh Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/himachal">Himachal Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kerala">Kerala Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/goa">Goa Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/golden-triangle">Golden Triangle Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/same-day">Same Day Tour Packages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contactus" className="nav-link">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
