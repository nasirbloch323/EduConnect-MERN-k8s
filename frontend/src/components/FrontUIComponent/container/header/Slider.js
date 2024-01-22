import React from "react";
import { Button, Container, Row, Col, Carousel, Image } from "react-bootstrap";
import slide01 from "../../../../../src/assets/HeroSlider/Hero-1.jpg";
import slide02 from "../../../../../src/assets/HeroSlider/Hero-2.jpg";
import slide03 from "../../../../../src/assets/HeroSlider/Hero-3.jpg";
import "./header.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <Container fluid style={{ height: "calc(100vh - 77px)" }}>
      <Row className="max-height">
        <Col xs={10} className="mx-auto div-col">
          <Carousel className="">
            <Carousel.Item className="p-0 m-0 ">
              <Image
                className="d-block w-100 "
                src={slide01}
                alt="First slide"
                fluid
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption
                className="text-left slider"
                data-aos="fade-down"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
              >
                <h1 className="slide-head"> University of Okara's High Achievement </h1>
                <p className="slide-para">
                Celebrating high achievers in research and international ranking 2024
                </p>
                <Button className="start-header-btn rounded-0" >
                  <Link to='/' className='link'> Get Started</Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Image
                className="d-block w-100 "
                src={slide02}
                alt="Third slide"
                fluid
                style={{ objectFit: "cover" }}
              />

              <Carousel.Caption data-aos="fade-right " className="text-left slider">
                <h1 className="slide-head">Annual Dinners in UO</h1>
                <p className="slide-para">
                2nd annual dinner, School of law, Computing Faculty
                </p>
                <Button className="start-header-btn rounded-0" >
                  <Link to='/' className='link'> Get Started</Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={slide03}
                alt="Third slide"
                fluid
                style={{ objectFit: "cover" }}
              />

              <Carousel.Caption data-aos="fade-right " className="text-left slider">
                <h1 className="slide-head">Ex Chief Justice Visit and Explore Communities</h1>
                <p className="slide-para">
                Ex Chief Justice LHC , honourable justice Qasim Khan visited UO
                </p>
                <Button className="start-header-btn rounded-0" >
                  <Link to='/' className='link'> Get Started</Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
