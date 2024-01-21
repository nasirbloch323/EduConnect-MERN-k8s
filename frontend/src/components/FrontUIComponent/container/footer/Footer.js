import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../../../../src/assets/logo.jpeg";
import "./footer.css";
import MapContainer from "./MapContainer";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer
      className="site-footer"
      id="contact"
      style={{ backgroundColor: "#fff" }}
    >
      <Container fluid>
        <Row>
          <MapContainer />
        </Row>
        <Row className="mt-5">
          <Col
            sm={6}
            md={3}
            data-aos="fade-right"
            className="mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap"
          >
            <Image src={logo} fluid className="footer-logo" />
            <h4 className="mt-3 text-center">
              EduConnect+ <br />
            </h4>
          </Col>
          <Col
            sm={6}
            md={3}
            data-aos="fade-left"
            className="d-flex mt-3 px-3 justify-content-start  flex-column flex-wrap"
          >
            <h3 className="mb-2 text-capitalize text-start">Important Links</h3>
            <div
              className="justify-content-start align-items-center flex-column"
              style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
            >
              <p>
                <Link className="link">Home</Link>
              </p>
              <p>
                <Link className="link">About</Link>
              </p>
              <p>
                <Link className="link">Blogs</Link>
              </p>
              <p>
                <Link className="link">Jobs</Link>
              </p>

            </div>
          </Col>
          <Col
            sm={6}
            md={3}
            data-aos="fade-left"
            className="d-flex mt-3 px-3 justify-content-start  flex-column flex-wrap"
          >
            <h3 className="mb-2 text-capitalize text-start">contact us</h3>
            <div
              className="justify-content-start align-items-center flex-column"
              style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
            >
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-map"></i>
                </span>
                <span>Okara, Pakistan</span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-phone"></i>
                </span>
                <span>+92 3000 0000 </span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>educonnect+@email.com</span>
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            md={3}
            data-aos="fade-left"
            className="mx-auto mt-3 px-3 d-flex justify-content-start  flex-column flex-wrap"
          >
            <h3 className="mb-2">NewsLetter</h3>

            <div
              style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
            >
              Enter your email address to get the latest University news,
              special events and student activities delivered right to your
              inbox.
              <div class="input-group mb-3 mt-3 is-warning ">
                <input
                  type="email"
                  class="form-control rounded-0"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text rounded-0"
                    style={{ backgroundColor: "#7A1CCB", color: "white" }}
                    id="basic-addon2"
                  >
                    subscribe
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container className="py-3">
        <Row>
          <Col md={8} sm={6} xs={12}>
            <p class="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by
              <a href="#copyright"> 3-Star</a>.
            </p>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#dribble">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );

}

export default Footer;
