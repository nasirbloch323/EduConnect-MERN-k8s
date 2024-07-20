import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./faculty.css"
import Topbar from "../../container/header/Topbar"
import Footer from "../../container/footer/Footer"
import Topnavbar from "../../container/header/Topnavbar"
import pg from "./faculty-img/pro-ghulam.jpeg"
function FacultyPage() {
	const displayFaculty = [
		{ name: "Pro Ghulam Ali", img: pg, duty: "Head of SE" },
		{
			name: "Pro Ahmad Ali",
			img: pg,
			duty: "Head of DS",
		},
	].map((member, index) => (
		<Col xs={12} sm={6} md={4} lg={3} key={index + member}>
			<div className='our-team'>
				<div className='picture'>
					<Image src={member.img} fluid />
				</div>
				<div className='team-content'>
					<h3 className='name'>{member.name}</h3>
					<h4 className='title'>{member.duty}</h4>
				</div>
				<ul className='social'>
					<li>
						<a className='facebook' href='#fb'>
							<i className='fab fa-facebook-f'></i>
						</a>
					</li>
					<li>
						<a className='twitter' href='#twitter'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a className='dribbble' href='#dribble'>
							<i className='fab fa-dribbble'></i>
						</a>
					</li>
					<li>
						<a className='linkedin' href='#linkedin'>
							<i className='fab fa-linkedin-in'></i>
						</a>
					</li>
				</ul>
			</div>
		</Col>
	))

	return (
		<>
			<Topnavbar />
			<Topbar />
			<section>
				<Container
					style={{ backgroundColor: "brown", color: "#fff" }}
					className='py-5 text-center aboutpage'
					fluid
				>
					<Row>
						<Col>
							<h1>Faculty</h1>
							<p>
								Home / <span style={{ color: "brown" }}>Faculty</span>
							</p>
						</Col>
					</Row>
				</Container>
				<Container className='mt-5 mb-5 '>
					<Row className='flex items-center justify-center '>
						{displayFaculty}
					</Row>
				</Container>
			</section>
			<Footer />
		</>
	)
}

export default FacultyPage
