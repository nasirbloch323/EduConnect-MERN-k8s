import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./contact.css"
import { useDispatch } from "react-redux"
import { createContact } from "@/redux/contactUsRelated/contactHandler"
import { Link } from "react-router-dom";
import MapContainer from "../../container/footer/MapContainer"

function Contact() {
	// const navigate = useNavigate()
	const dispatch = useDispatch()
	// const { status } = useSelector((state) => state.contact)
	const [validated, setValidated] = useState(false)
	const [fields, setFields] = useState({})
	const handleChange = (e) => {
		setFields((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}))
		// console.log(fields)
	}
	const handleSubmit = (e) => {
		const form = e.currentTarget
		e.preventDefault()
		if (form.checkValidity() === false) {
			e.preventDefault()
			e.stopPropagation()
		}
		// console.log(fields)
		dispatch(createContact(fields))
		setValidated(true)
		setFields(null)
	}
	// useEffect(() => {
	// 	if (status) {
	// 		navigate("/")
	// 		getStatus(false)
	// 	}
	// }, [navigate, status])
	return (
		<section>
			<Container
				className=' bg-[#7A1CCB] text-[#fff] py-2 px-4 '
				fluid
			>
				<Row>
					<Col>
						<p className="pl-2">
							<Link to='/'>Home</Link>   / <span>Contact</span>
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
					<Col lg={8} md={6} className='mx-4'>
						<h1>Get in Touch</h1>
						<hr />
						<p className='mt-5'>
							You can contact us any way that is convenient for you. We are
							available 24/7 via fax or email. You can also use a quick contact
							form below or visit our office personally. We would be happy to
							answer your questions.
						</p>
						<Form
							noValidate
							validated={validated}
							onSubmit={handleSubmit}
							className='p-4 space-y-4'
						>
							<Row>
								<Form.Group
									hasValidation
									as={Col}
									controlId='formGridFirstName'
								>
									<Form.Label>Name</Form.Label>

									<Form.Control
										name='name'
										onChange={handleChange}
										type='text'
										placeholder='Enter Name'
										aria-describedby='inputGroupPrepend'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please Enter Name.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
							<Row>
								<Form.Group hasValidation as={Col} controlId='formGridEmail'>
									<Form.Label>
										Email <sup>*</sup>
									</Form.Label>

									<Form.Control
										onChange={handleChange}
										type='email'
										name='email'
										placeholder='Enter email'
										aria-describedby='inputGroupPrepend'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please Enter Email.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>

							<Form.Group controlId='formGridAddress1'>
								<Form.Label>Address</Form.Label>
								<Form.Control
									name='address'
									onChange={handleChange}
									type='text'
									placeholder='1234 Main St'
								/>
							</Form.Group>

							<Row>
								<Form.Group hasValidation as={Col} controlId='formGridPhone'>
									<Form.Label>
										Phone <sup>*</sup>
									</Form.Label>
									<Form.Control
										onChange={handleChange}
										name='phoneNo'
										type='tel'
										placeholder='Enter Phone'
										aria-describedby='inputGroupPrepend'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please Enter Phone.
									</Form.Control.Feedback>
								</Form.Group>{" "}
							</Row>
							<Row>
								<Form.Group
									hasValidation
									as={Col}
									controlId='formGridDescription'
								>
									<Form.Label>
										Message <sup>*</sup>
									</Form.Label>
									<Form.Control
										onChange={handleChange}
										name='description'
										as={"textarea"}
										rows={"6"}
										placeholder='Enter Your Message'
										aria-describedby='inputGroupPrepend'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please Enter Message.
									</Form.Control.Feedback>
								</Form.Group>{" "}
							</Row>

							<Button
								className='btn btn-primary mt-4 bg-[#7A1CCB] text-[#fff] border-0'
								type='submit'
							>
								Send Message
							</Button>
						</Form>
					</Col>
					<Col lg={3} md={6} className='mx-3 mt-5 mt-lg-3'>
						<h3>Social</h3>
						<hr />
						<div>
							<ul className='mt-1 social-icons'>
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
				<Row className='overflow-x-hidden'>
					<MapContainer />
				</Row>
			</Container>
		</section>
	)
}

export default Contact
