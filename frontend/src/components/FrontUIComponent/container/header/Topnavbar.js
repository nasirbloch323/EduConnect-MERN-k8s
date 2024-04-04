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
            <div className="container p-0 m-0">
                <div className="right-container ">
                    <Nav className="mx-auto d-flex ">

                        <Link to="/" className="top-item" >
                            Journals
                        </Link>
                        <Link to="/" className="top-item"  >
                            Conference
                        </Link> 
                        <Link to="/cgpa" className="top-item"  >
                            CGPA CALCULATOR
                        </Link> 
                         <Link to="/blogs" className="top-item" >
                            Blogs
                        </Link>

                        <Link to="/about" className="top-item" >
                            About
                        </Link>
                        <Link to="/jobs" className="top-item"  >
                            Jobs
                        </Link>
                        <Link to="/contact" className="top-item" >
                            Contact
                        </Link>
                        <Link to="/contact" className="top-item"  >
                            Offices
                        </Link>
                        <Link to='/login' className='toplogin-header-btn'>LMS</Link>
                    </Nav>
                </div>
            </div>

        </>
    );

}

export default Topnavbar;