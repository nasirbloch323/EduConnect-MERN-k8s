import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./Data";
import { Container, Row, Col } from "react-bootstrap";
import VideoGallery from "./VideoGallery";
import { useState } from "react";

function FullGallery() {
  const {img , setimage} = useState(IMAGES);

    return (
      <section id="gallary" style={{ backgroundColor: "#fff" }}>
        <Container fluid className="message-container">
          <Row>
            <Col className="mx-auto my-3 text-center text-capitalize">
              <h1>
                <strong style={{ color: "brown" }}>Gallery</strong>
              </h1>
            </Col>
          </Row>
          <Gallery images={img} />
        </Container>
        <VideoGallery />
      </section>
    );
  
}

export default FullGallery;
