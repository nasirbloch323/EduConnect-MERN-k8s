import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../../../../src/assets/logo.jpeg";
import "./header.css";
import { Link } from "react-router-dom";

function Topbar() {

  return (
    <Navbar
      expand="lg"
      className="px-4 text-capitalize"
      style={{ backgroundColor: "#fff" }}
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" className="header-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>

          <NavDropdown title="Administration" id="administration-dropdown">
            <Link to="/courses">
              <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
            </Link>
            <Link to="/gallery">
              <NavDropdown.Item href="/gallery">gallery</NavDropdown.Item>
            </Link>
            <Link to="/events">
              <NavDropdown.Item href="/events">events</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Link to="/admission">
            <Nav.Link href="/admission">Admission</Nav.Link>
          </Link>
          <Link to="/faculty">
            <Nav.Link href="/faculty">Faculty</Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
          <Link to="/contact">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <Button variant="outline-success enroll-btn"><Link to='/login'>Login</Link></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

}

export default Topbar;
