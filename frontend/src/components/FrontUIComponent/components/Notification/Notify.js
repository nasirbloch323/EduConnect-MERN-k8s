import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../../container/header/Topbar";
import Footer from "../../container/footer/Footer";

function Notify() {

  return (
    <>
      <Topbar />
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>Notifications</h1>
              <p>
                Home / <span style={{ color: "brown" }}>Notifications</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col className="mx-auto px-lg-5 text-left mt-5 mb-5">
              <h1>Overview</h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              <p className="mt-3">
                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                <br />Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.


              </p>
              <p className="mt-3">
                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.

                Card Title
                Some quick example text to build on the card title and make up the bulk of the card's content.


              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );

}

export default Notify;
