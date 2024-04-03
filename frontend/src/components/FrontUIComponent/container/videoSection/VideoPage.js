import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bookvideo from "../../videos/Book.mp4";
import "./video.css";
import { Link } from "react-router-dom";

function VideoPage() {
 
    return (
      <section className='video-sion w-full object-fill '>
        <Container fluid className="p-0 m-0 w-full">
          <Row className="video-row">
            <Col xs={10} className="mx-auto w-100 video-col">
              <video autoPlay loop muted>
                <source src={bookvideo} type="video/mp4"></source>
              </video>
              <div className="video-text">
                <p>Trusted by 10,000+ students</p>
                <Button className="video-header-btn rounded-0" >
              <Link to='/login' className='link'>Register</Link>
            </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  
}

export default VideoPage;
