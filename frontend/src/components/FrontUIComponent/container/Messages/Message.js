import React from "react"
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import course from "../../images/course01.jpeg"
import "./message.css"
// import LatestEvents from "./LatestEvents"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"

function Message({ props }) {
	const { events } = useSelector((state) => state.events)

	return (
		<section id='messages'>
			<Container fluid className='overflow-x-hidden message-container'>
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
				<Row className='mx-3 main-row'>
					{events && events.length > 0 ? (
						events.map((event, i) => <CardStyle key={i} event={event} />)
					) : (
						<div className='flex items-center justify-center py-2 gap-x-2'>
							<Loader2 className='w-6 h-6 animate-spin a-titles' />
							<h2 className='animate-pulse'>Loading...</h2>
						</div>
					)}
				</Row>
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
			{/* <LatestEvents /> */}
		</section>
	)
}

export default Message
const CardStyle = ({ event }) => {
	return (
		<Col className='mx-auto my-1' lg={4} sm={6} data-aos='zoom-in-up'>
			<Card className='message-card rounded-0'>
				<Row className='no-gutters'>
					<Col className='col-sm-5'>
						<Image
							src={event.image.url}
							fluid
							style={{ width: "100%", height: "100%" }}
						/>
					</Col>
					<Col className='col-sm-7 rounded-0'>
						<Card.Body className='car-body'>
							<Card.Title>{event.name}</Card.Title>
							<Card.Text>{event.desc}</Card.Text>

							<Button className='news-header-btn rounded-0'>
								<Link to='/notification' className='links'>
									LEARN MORE
								</Link>
							</Button>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Col>
	)
}
