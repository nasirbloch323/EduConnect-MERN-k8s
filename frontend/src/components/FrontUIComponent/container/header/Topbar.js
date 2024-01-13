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
// import Topnavbar from "./Topnavbar";

function Topbar() {

  return (
    <>
      {/* <Topnavbar /> */}
      <Navbar
        expand="lg"
        className="px-5 m-0 p-2 text-capitalize"
        style={{ backgroundColor: "#fff" }}
      >
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" className="header-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-humber " />
        <Navbar.Collapse id="basic-navbar-nav border-0">
          <Nav className="mx-auto">
            <Link to="/" >
              <Nav.Link href="/" className="nav-items">Home</Nav.Link>
            </Link>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle nav-items" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administration
              </Link>
              <ul class="dropdown-menu rounded-0">
                <li className="nav-items"><Link class="dropdown-item" to="/courses">Courses</Link></li>
                <li className="nav-items"><Link class="dropdown-item" to="/gallery">gallery</Link></li>
                <li className="nav-items"><Link class="dropdown-item" href="/events">events</Link></li>
              </ul>
            </li>

            <Link to="/admission" className="nav-items">
              <Nav.Link href="/admission" className="nav-items">Admission</Nav.Link>
            </Link>
            <Link to="/faculty" >
              <Nav.Link href="/faculty" className="nav-items dropdown-item">Faculties</Nav.Link>
            </Link>
            <Link to="/about" >
              <Nav.Link href="/about" className="nav-items">About</Nav.Link>
            </Link>
            <Link to="/" >
              <Nav.Link href="/" className="nav-items">Academic</Nav.Link>
            </Link>
            <Link to="/" >
              <Nav.Link href="/" className="nav-items">directorates</Nav.Link>
            </Link>
          </Nav>
          <Form inline>
            <Button className="login-header-btn"><Link to='/contact' className='link'>Contact</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );

}

export default Topbar;
