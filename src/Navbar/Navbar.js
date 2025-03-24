import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  const [expanded, setExpanded] = useState(false); // State to track navbar toggle

  return (
    <Navbar expanded={expanded} expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Traveller
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => setExpanded(false)}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link" onClick={() => setExpanded(false)}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link" onClick={() => setExpanded(false)}>BLOGS</Nav.Link>
            <NavDropdown 
              title="TOUR PACKAGES" 
              id="basic-nav-dropdown" 
              className="dropdown-hover"
            >
              <NavDropdown.Item as={Link} to="/kashmir" onClick={() => setExpanded(false)}>Kashmir Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rajasthan" onClick={() => setExpanded(false)}>Rajasthan Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ladakh" onClick={() => setExpanded(false)}>Ladakh Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/himachal" onClick={() => setExpanded(false)}>Himachal Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kerala" onClick={() => setExpanded(false)}>Kerala Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/goa" onClick={() => setExpanded(false)}>Goa Tour Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/golden-triangle" onClick={() => setExpanded(false)}>Golden Triangle Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/same-day" onClick={() => setExpanded(false)}>Same Day Tour Packages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contactus" className="nav-link" onClick={() => setExpanded(false)}>CONTACT US</Nav.Link>

            {/* Dashboard Icon Link */}
            <Nav.Link as={Link} to="/dashboard" className="nav-link dashboard-icon" onClick={() => setExpanded(false)}>
              <CgProfile size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
