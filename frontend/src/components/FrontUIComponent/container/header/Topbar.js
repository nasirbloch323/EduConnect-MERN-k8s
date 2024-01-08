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
      <Navbar.Brand href="/" className="w-50">
        <img src={logo} alt="logo" className="header-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/" >
            <Nav.Link href="/" className="nav-items">Home</Nav.Link>
          </Link>

          <NavDropdown title="Administration" id="administration-dropdown" className="nav-items">
            <Link to="/courses" >
              <NavDropdown.Item href="/courses" className="nav-items">Courses</NavDropdown.Item>
            </Link>
            <Link to="/gallery" >
              <NavDropdown.Item href="/gallery" className="nav-items">gallery</NavDropdown.Item>
            </Link>
            <Link to="/events" >
              <NavDropdown.Item href="/events" className="nav-items">events</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Link to="/admission" className="nav-items">
            <Nav.Link href="/admission"   className="nav-items">Admission</Nav.Link>
          </Link>
          <Link to="/faculty" >
            <Nav.Link href="/faculty" className="nav-items">Faculty</Nav.Link>
          </Link>
          <Link to="/about" >
            <Nav.Link href="/about" className="nav-items">About</Nav.Link>
          </Link>
          <Link to="/contact" >
            <Nav.Link href="/contact" className="nav-items">Contact</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <Button className="login-header-btn"><Link to='/login' className='link'>Login</Link></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

}

export default Topbar;
