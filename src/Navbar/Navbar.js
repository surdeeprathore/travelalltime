import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Traveller
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">HOME</Nav.Link>
            <Nav.Link href="#link" className="nav-link">ABOUT US</Nav.Link>
            <NavDropdown 
              title="TOUR PACKAGES"
              id="basic-nav-dropdown"
              className="dropdown-hover"
            >
              <NavDropdown.Item href="#action/3.1">
                Kashmir Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rajasthan Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Ladakh Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Himachal Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Kerala Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Goa Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Golden Triangle Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                Same Day Tour Packages
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
