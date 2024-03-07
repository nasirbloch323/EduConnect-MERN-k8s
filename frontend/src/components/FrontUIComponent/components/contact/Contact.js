import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./contact.css"

function Contact() {
	return (
		<section>
			<Container
				style={{ backgroundColor: "#552285", color: "#fff" }}
				className='text-center py-5'
				fluid
			>
				<Row>
					<Col>
						<h1>Contacts</h1>
						<p>
							Home / <span style={{ color: "grey" }}>Contact</span>
						</p>
					</Col>
				</Row>
			</Container>
			<Container
				fluid
				className='pt-5 pb-5'
				style={{ backgroundColor: "#fff" }}
			>
				<Row>
					<Col lg={8} md={6} className='mx-3'>
						<h1>Get in Touch</h1>
						<hr />
						<p className='mt-5'>
							You can contact us any way that is convenient for you. We are
							available 24/7 via fax or email. You can also use a quick contact
							form below or visit our office personally. We would be happy to
							answer your questions.
						</p>
						<Form>
							<Row>
								<Form.Group as={Col} controlId='formGridFirstName'>
									<Form.Label>First Name</Form.Label>
									<Form.Control type='text' placeholder='Enter First Name' />
								</Form.Group>

								<Form.Group as={Col} controlId='formGridLastName'>
									<Form.Label>Last Name</Form.Label>
									<Form.Control type='text' placeholder='Enter Last Name' />
								</Form.Group>
							</Row>
							<Row>
								<Form.Group as={Col} controlId='formGridEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' placeholder='Enter email' />
								</Form.Group>

								<Form.Group as={Col} controlId='formGridPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' placeholder='Password' />
								</Form.Group>
							</Row>

							<Form.Group controlId='formGridAddress1'>
								<Form.Label>Address</Form.Label>
								<Form.Control placeholder='1234 Main St' />
							</Form.Group>

							<Form.Group controlId='formGridAddress2'>
								<Form.Label>Address 2</Form.Label>
								<Form.Control placeholder='Apartment, studio, or floor' />
							</Form.Group>

							{/* <Form.Row>
								<Form.Group as={Col} controlId='formGridCity'>
									<Form.Label>City</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId='formGridState'>
									<Form.Label>State</Form.Label>
									<Form.Control as='select' defaultValue='Choose...'>
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Form.Group>

								<Form.Group as={Col} controlId='formGridZip'>
									<Form.Label>Zip</Form.Label>
									<Form.Control />
								</Form.Group>
							</Form.Row> */}

							<Button className='btn btn-primary mt-4 bg-[#552285] text-[#fff] border-0' type='submit'>
								Send Message
							</Button>
						</Form>
					</Col>
					<Col lg={3} md={6} className='mx-3 mt-5 mt-lg-3'>
						<h3>Social</h3>
						<hr />
						<div>
							<ul className='social-icons  mt-1'>
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
						<div className='mt-5'>
							<h3>Phone</h3>
							<hr />
							<p>
								<span>
									<i
										className='fas fa-phone'
										style={{ marginRight: 15, color: "dodgerblue" }}
									></i>
								</span>
								+92 3000 0000
							</p>
							<p>
								<span>
									<i
										className='fas fa-phone'
										style={{ marginRight: 15, color: "dodgerblue" }}
									></i>
								</span>
								+92 3000 0001
							</p>
						</div>
						<div className='mt-5'>
							<h3>Email</h3>
							<hr />
							<p>
								<span>
									<i
										className='fas fa-envelope'
										style={{ marginRight: 15, color: "mediumpurple" }}
									></i>
								</span>
								educonnect+@gmail.com
							</p>
						</div>
						<div className='mt-5'>
							<h3>Address</h3>
							<hr />
							<p>
								<span>
									<i
										className='fas fa-map-marker'
										style={{ marginRight: 15, color: "darkorange" }}
									></i>
								</span>
								Okara, Pakistan
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Contact
