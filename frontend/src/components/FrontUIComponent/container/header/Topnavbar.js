import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

function Topnavbar() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="right-container">
                        <Nav className="mx-auto d-flex ">

                            <Link to="/" className="top-item" >
                                Journals
                            </Link>
                            <Link to="/" className="top-item"  >
                                Conference
                            </Link>  <Link to="/" className="top-item" >
                                Blogs
                            </Link>
                            <Link to="/" className="top-item"  >
                                Jobs
                            </Link>
                            <Link to="/about" className="top-item" >
                                Faculty
                            </Link>
                            <Link to="/contact" className="top-item"  >
                                Offices
                            </Link>
                            <Link to='/login' className='toplogin-header-btn'>Login</Link>
                        </Nav>

                    </div>
                </div>
            </div>

        </>
    );

}

export default Topnavbar;