import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutPic from "../../images/course01.jpeg";
import { Link } from "react-router-dom";

function AboutPage1() {
  return (
    <>
      <section>
        <Container

          className=" bg-[#7A1CCB] text-[#fff] py-2 px-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              {/* <h1>About</h1> */}
              <p>
                <Link to='/'>Home</Link>   / <span>About</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="bg-[#fff]">
            <Col className="mx-auto   px-lg-5 text-left mt-5 mb-5">
              <h1>Overview</h1>
              <div style={{ borderTop: "4px solid #7A1CCB", width: 68 }}></div>
              <p className="mt-3">
                Learn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet lorem
              </p>
              <p className="mt-3">
                Learn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet lorem
              </p>
            </Col>
          </Row>
          <Row className="bg-[#E0E0E0] text-[#fff]">
            <Col xs={10} lg={8} md={6} className="mx-auto px-lg-5 my-5">
              <h1 className="text-capitalize">
                <strong className="text-black">Mission</strong>
              </h1>
              <div style={{ borderTop: "4px solid #7A1CCB", width: 60 }}></div>
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
                Learn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet lorem
                <br />
                Learn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet loremLearn Js in ease
                Lorem ipsum dolet lorem ipsum dolet lorem
              </p>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto px-lg-5 my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image
                  src={aboutPic}
                  fluid
                  style={{ border: "1px solid #7A1CCB", padding: "5px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );

}

export default AboutPage1;
