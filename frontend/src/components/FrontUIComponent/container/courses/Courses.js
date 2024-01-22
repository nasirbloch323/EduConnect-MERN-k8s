import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./courses.css";
import { Link } from "react-router-dom";

function Courses() {

  const displayCourse = ["course01", "course02", "course03", "course04"].map(
    (course, index) => (
      <Col
        xs={10}
        sm={6}
        lg={4}
        className="course-item mx-auto my-3"
        key={course + index}
        data-aos="fade-up"
      >
        <Card className="course-card">
          <div className="img-container">
            <Card.Img variant="top" src={course01} className="course-img" />
            <span className="course-item-icon">
              <i className="fas fa-star"></i>
            </span>
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </Card.Text>
            <div className="text-center">
              <Button className="cor-header-btn rounded-0" >
                <Link to='/login' className='link'>Register</Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  );

  return (
    <>
      <div className="container mt-4 mb-4">
        <h1 className="a-title">
          RESEARCH IN<strong className="a-titles"> LIMELIGHT</strong>
        </h1>
        <div className="row">
          <div className="p-1 a-card col-md-3 " data-aos="zoom-in-up">
            <div className="card-r p-0 center" >
              <Link to='' className='w-100'>
                <img src={course01} className='w-100 p-1' alt=' ' />
              </Link>
              <div class="middle">
                <div class="text-white "> <h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>NARRATIVE ART</h5>
                </div>
              </div>
            </div>
            <div class=" ">
              <h5 className='fs-6 p-2 text-black uppercase'>UO ARCHAEOLOGY DEPT. DISCOVERED 2000 YEARS OLD UNIQUE EVIDENCES OF BUDDHIST NARRATIVE ART</h5>
            </div>
          </div>
          <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">

            <Link to='' className='w-100'>
              <img src={course01} className='w-100 p-1' alt=' ' />
            </Link>

            <div class="middle1">
              <div class="text-white "> <h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>TRANSGENIC COTTON</h5>
              </div>
            </div>

            <div class=" ">
              <h5 className='fs-6 p-2 text-black uppercase'>TRANSGENIC COTTON VARIETIES DEVELOPED AT CEMB</h5>
            </div>
          </div>
          <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">
            <div className="card-r p-0 center" >
              <Link to='' className='w-100'>
                <img src={course01} className='w-100 p-1' alt=' ' />
              </Link>

              <div class="middle2">
                <div class="text-white "> <h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>HEPATITIS & CANCER TREATMENT</h5>

                </div>
              </div>
            </div>
            <div class=" ">
              <h5 className='fs-6 p-2 text-black uppercase'>HEPATITIS AND CANCER TREATMENT       </h5>
            </div>
          </div>
          <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">
            <div className="card-r p-0 center" >
              <Link to='' className='w-100'>
                <img src={course01} className='w-100 p-1' alt=' ' />
              </Link>

              <div class="middle3">
                <div class="text-white "> <h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>HEAVY METALS TOXICITY</h5>

                </div>
              </div>
            </div>
            <div class=" ">
              <h5 className='fs-6 p-2 text-black uppercase'>Uo RESEARCHER FINDS HEAVY METALS TOXICITY IN CHASHMA BARRAGE MUSSELS</h5>
            </div>
          </div>

        </div>
      </div>


    </>
  );

}

export default Courses;
