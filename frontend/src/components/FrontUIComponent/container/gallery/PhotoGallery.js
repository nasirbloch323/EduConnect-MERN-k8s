import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function PhotoGallery() {
  const { img, setimage } = useState(IMAGES.slice(0, 10));
  return (
    <section id="gallary" style={{ backgroundColor: "#fff" }}>
      <Container fluid className="message-container">
        <Row>
          <Col className="mx-auto my-3 text-center text-capitalize">
            <h1>
              University <strong style={{ color: "brown" }}>Gallery</strong>
            </h1>
          </Col>
        </Row>
        <Gallery images={img} />
        <div className="text-center">
          <Button
            variant="danger"
            data-aos="zoom-in"
            style={{ margin: "20px 0", color: "#fff" }}
            className=" btn-gallery"
          >
            <Link to="/gallery">View More</Link>
          </Button>
        </div>
      </Container>
    </section>
  );

}

export default PhotoGallery;
