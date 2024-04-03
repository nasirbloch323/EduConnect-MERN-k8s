import React, { Component } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import course01 from "../../images/course01.jpeg"
import "./courses.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"

function Courses() {
	const { researchs } = useSelector((state) => state.researchs)
	// const displayCourse = ["course01", "course02", "course03", "course04"].map(
	// 	(course, index) => (
	// 		<Col
	// 			xs={10}
	// 			sm={6}
	// 			lg={4}
	// 			className='mx-auto my-3 course-item'
	// 			key={course + index}
	// 			data-aos='fade-up'
	// 		>
	// 			<Card className='course-card'>
	// 				<div className='img-container'>
	// 					<Card.Img variant='top' src={course01} className='course-img' />
	// 					<span className='course-item-icon'>
	// 						<i className='fas fa-star'></i>
	// 					</span>
	// 				</div>
	// 				<Card.Body>
	// 					<Card.Title>Card Title</Card.Title>
	// 					<Card.Text>
	// 						Some quick example text to build on the card title and make up the
	// 						bulk of the card's content.
	// 					</Card.Text>
	// 					<div className='text-center'>
	// 						<Button className='cor-header-btn rounded-0'>
	// 							<Link to='/login' className='link'>
	// 								Register
	// 							</Link>
	// 						</Button>
	// 					</div>
	// 				</Card.Body>
	// 			</Card>
	// 		</Col>
	// 	)
	// )

	return (
		<>
			<div className='container mt-4 mb-4'>
				<h1 className='a-title'>
					RESEARCH IN<strong className='a-titles'> LIMELIGHT</strong>
				</h1>
				<div className='row'>
					{researchs ? (
						researchs.length === 0 ? (
							<h1 className='py-3 text-center'>
								Currently there is no any research.
							</h1>
						) : researchs.length > 0 ? (
							researchs.map((research, i) => (
								<CardStyle key={i} research={research} />
							))
						) : (
							<div className='flex items-center justify-center py-2 gap-x-2'>
								<Loader2 className='w-6 h-6 animate-spin a-titles' />
								<h2 className='animate-pulse'>Loading...</h2>
							</div>
						)
					) : null}
				</div>
			</div>
		</>
	)
}
const CardStyle = ({ research }) => {
	return (
		<div className='p-1 a-card col-md-3' data-aos='zoom-in-up'>
			<div className='p-0 card-r center'>
				<Link to='' className='w-100'>
					<img src={course01} className='p-1 w-100' alt=' ' />
				</Link>

				<div className='middle3'>
					<div className='text-white '>
						{" "}
						<h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>
							{research.title}
						</h5>
					</div>
				</div>
			</div>
			<div className=''>
				<h5 className='p-2 text-black uppercase fs-6'>{research.desc}</h5>
			</div>
		</div>
	)
}

export default Courses
