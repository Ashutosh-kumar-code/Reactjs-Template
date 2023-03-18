import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Form,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">TECHIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="d-flex">
              <Nav.Link  href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#action3">Services</Nav.Link>
              <Nav.Link href="#action7">Portfolio</Nav.Link>
              <Nav.Link href="#action1">Team</Nav.Link>
              <NavDropdown title="DropDown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <p className="btn" variant="outline-light">Get Started</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
