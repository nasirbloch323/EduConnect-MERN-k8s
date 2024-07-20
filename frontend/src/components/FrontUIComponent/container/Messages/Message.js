import React, { useState } from "react"
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import "./message.css"

// import LatestEvents from "./LatestEvents"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"
import moment from "moment";

function Message({ props }) {
	const { events } = useSelector((state) => state.events)
	const [startIndex, setStartIndex] = useState(0);
	const handleNext = () => {
		setStartIndex(startIndex + 6);
	};

	const handlePrevious = () => {
		setStartIndex(Math.max(startIndex - 6, 0));
	};

	return (
		<section id='messages' className="container22 mt-5">
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
						events.slice(startIndex, startIndex + 6)
							.map((event, i) => <CardStyle key={i} event={event} />)
					) : (
						<div className="flex relative my-5 items-center justify-center ">
							<div class="loader my-2">Loading
								<span></span>
							</div>
						</div>
					)}
				</Row>
				<Row>
					<Col className='mx-auto text-center'>
						<Button className='view-header-btn rounded-0'>
							<Link to='/' className='link' onClick={handleNext}>
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
	const truncatedName = event.name.split(" ").slice(0, 7).join(" ") + "...";
	const truncatedDescription = event.desc.split(" ").slice(0, 7).join(" ") + "...";
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
							<Card.Title className="font-bold ">{truncatedName}</Card.Title>
							<Card.Text className="text-sm">{truncatedDescription}</Card.Text>
							<div className="flex">
								<Card.Text className="pt-3 pr-2 text-xs m-0">
									{moment(event.startDate).format("MM/DD/YYYY")}
								</Card.Text>

								<Button className='news-header-btn rounded-0'>
									<Link to='/notification' className='links'>
										LEARN MORE
									</Link>
								</Button>

							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Col>
	)
}
