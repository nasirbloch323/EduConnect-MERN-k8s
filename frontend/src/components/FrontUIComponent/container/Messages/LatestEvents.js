import React from "react"
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
// import "./LEvents.css";
import course from "../../images/course01.jpeg"
import { Link } from "react-router-dom"

function LatestEvents() {
	// const displayLatestEvents = [
	//   "event01",
	//   "event02",
	//   "event03",
	//   "event04",
	// ].map((levent, index) => (
	//   <Col className="mx-auto mb-1 w-100" lg={4} sm={6} data-aos="zoom-in-up">
	//     <Card className="message-card rounded-0">
	//       <Row className="no-gutters">
	//         <Col className="col-sm-7 w-100">
	//           <Card.Body className="car-body">
	//             <Card.Title>Learn Js in ease</Card.Title>
	//             <Card.Text>Lorem ipsum dolet lorem ipsum dolet lorem</Card.Text>

	//             <Button className="events-header-btn rounded-0" >
	//               <Link to='/events' className='links'>LEARN MORE</Link>
	//             </Button>
	//           </Card.Body>
	//         </Col>
	//         <Col className="col-sm-5 w-100">
	//           <Image
	//             src={course}
	//             fluid
	//            className="w-100"
	//           />
	//         </Col>
	//       </Row>
	//     </Card>
	//   </Col>
	// ));

	// return (
	//   <section className="p-0 m-0 w-100">
	//   <Container fluid className="massage-container">
	//     <Row>
	//       <Col className="pl-4 mx-auto mt-5 mb-1 text-capitalize">
	//         <h1 className="a-title">
	//           Latest <strong className="a-titles">Events</strong>
	//         </h1>
	//       </Col>
	//     </Row>
	//     <Row>{displayLatestEvents}</Row>
	//     <Row>
	//       <Col className="mx-auto text-center">
	//         <Button className="view-header-btn rounded-0" >
	//           <Link to='/' className='link'>VIEW MORE</Link>
	//         </Button>
	//       </Col>
	//     </Row>
	//   </Container>
	//   </section>
	// );

	const displayMessageCard = [
		"card01",
		"card02",
		"card03",
		"card04",
		"card05",
		"card06",
	].map((cards, index) => (
		<Col className='mx-auto my-1' lg={4} sm={6} data-aos='zoom-in-up'>
			<Card className='message-card rounded-0'>
				<Row className='no-gutters'>
					<Col className='col-sm-7 rounded-0'>
						<Card.Body className='car-body'>
							<Card.Title>Learn Js in ease</Card.Title>
							<Card.Text>Lorem ipsum dolet lorem ipsum dolet lorem</Card.Text>

							<Button className='news-header-btn rounded-0'>
								<Link to='/notification' className='links'>
									LEARN MORE
								</Link>
							</Button>
						</Card.Body>
					</Col>
					<Col className='col-sm-5'>
						<Image
							src={course}
							fluid
							style={{ width: "100%", height: "100%" }}
						/>
					</Col>
				</Row>
			</Card>
		</Col>
	))

	return (
		<>
			<Container fluid className='message-container '>
				<Row>
					<Col className='mx-auto mt-5 text-capitalize'>
						<h1 className='pl-4 a-title'>
							Latest <strong className='a-titles'>Events</strong>
						</h1>
						<div className='latest-news'>
							<marquee>
								<p>
									<a href='/notification' className='marq-a'>
										We are coming soon with bunch of surprises
									</a>
									<i
										className='fas fa-certificate'
										style={{ marginRight: "2rem", marginLeft: "10px" }}
									></i>
									<a href='/notification' className='marq-a'>
										We are coming soon with bunch of surprises
									</a>
									<i
										className='fas fa-certificate'
										style={{ marginRight: "2rem", marginLeft: "10px" }}
									></i>
									<a href='/notification' className='marq-a'>
										We are coming soon with bunch of surprises
									</a>
									<i
										className='fas fa-certificate'
										style={{ marginRight: "2rem", marginLeft: "10px" }}
									></i>
									<a href='/notification' className='marq-a'>
										We are coming soon with bunch of surprises
									</a>
									<i
										className='fas fa-certificate'
										style={{ marginRight: "2rem", marginLeft: "10px" }}
									></i>
								</p>
							</marquee>
						</div>
					</Col>
				</Row>
				<Row className='mx-3 main-row'>{displayMessageCard}</Row>
				<Row>
					<Col className='mx-auto text-center'>
						<Button className='view-header-btn rounded-0'>
							<Link to='/' className='link'>
								VIEW MORE
							</Link>
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default LatestEvents
