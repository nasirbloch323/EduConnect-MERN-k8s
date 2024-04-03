import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import logo from "../../../../../src/assets/logo.jpeg"
import "./footer.css"
// import MapContainer from "./MapContainer"
import { Link } from "react-router-dom"

function Footer() {
	return (
		<footer
			className='site-footer bg-[#fff] '
			id='contact'

		>
			<Container fluid className="pb-4 px-4">
				<Row className='overflow-x-hidden'>
					{/* <MapContainer /> */}
				</Row>
				<Row className='mt-5  overflow-x-hidden'>
					<Col
						sm={6}
						md={3}
						// data-aos='fade-right'
						className='flex-wrap mx-auto d-flex justify-content-start flex-column'
					>
						<Image src={logo} className=' w-20 h-20 justify-content-start align-items-start' />


						<div className="p-0 m-0 w-full">

							<p className="text-sm ">Enter your email address to get the latest University news,
								special events and student activities delivered right to your
								inbox. </p>

							<ul className='social-icons text-align-start my-2 p-0'>
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
							{/* <div className='mt-3 mb-3 input-group is-warning '>
								<input
									type='email'
									className='form-control rounded-0 text-sm'
									placeholder='Email'
									aria-label='Email'
									aria-describedby='basic-addon2'
								/>
								<div className='input-group-append'>
									<span
										className='input-group-text text-sm rounded-0 bg-[#7A1CCB] text-[#fff]'

										id='basic-addon2'
									>
										subscribe
									</span>
								</div>
							</div> */}
						</div>
					</Col>
					<Col
						sm={6}
						md={3}
						// data-aos='fade-left'
						className='flex-wrap px-3 mt-3 d-flex justify-content-start flex-column'
					>
						<h3 className='mb-2 font-semibold text-start uppercase'>Important Links</h3>
						<div
							className='justify-content-start align-items-center text-sm space-y-2 flex-column'
							style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
						>
							<p>
								<Link className='/'>All Departments</Link>
							</p>
							<p>
								<Link className='/about'>UO Media </Link>
							</p>
							<p>
								<Link className='/blogs'>Academic Election</Link>
							</p>
							<p>
								<Link className='/jobs'>Schalarships</Link>
							</p>
							<p>
								<Link className='/contact'>Complaints</Link>
							</p>
							<p>
								<Link className='/jobs'>Notifications</Link>
							</p>
						</div>
					</Col>
					<Col
						sm={6}
						md={3}
						// data-aos='fade-left'
						className='flex-wrap px-3 mt-3 d-flex justify-content-start flex-column'
					>
						<h3 className='mb-2 font-semibold text-start uppercase'>Admission</h3>
						<div
							className='justify-content-start align-items-center text-sm space-y-2 flex-column'
							style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
						>
							<p>
								<Link className='/'>Notices</Link>
							</p>
							<p>
								<Link className='/about'>Merit Lists</Link>
							</p>
							<p>
								<Link className='/blogs'>Fee Structure</Link>
							</p>
							<p>
								<Link className='/jobs'>Langauge Proficiency</Link>
							</p>
							<p>
								<Link className='/contact'>Eligible / Inenligible Condidates</Link>
							</p>
							<p>
								<Link className='/jobs'>International Students</Link>
							</p>
						</div>
					</Col>
					<Col
						sm={6}
						md={3}
						// data-aos='fade-left'
						className='flex-wrap px-3 mx-auto mt-3 d-flex justify-content-start flex-column'
					>
						<h3 className='mb-2 font-semibold text-start uppercase'>Quick Links</h3>

						<div
							className='justify-content-start align-items-center text-sm space-y-2 flex-column'
							style={{ borderTop: "1px solid #7A1CCB", paddingTop: "0.5rem" }}
						>
							<p>
								<Link className='/'>Transport / Buses Informations </Link>
							</p>
							<p>
								<Link className='/about'>Online Challan form</Link>
							</p>
							<p>
								<Link className='/blogs'>Newsletter </Link>
							</p>
							<p>
								<Link className='/jobs'>Jobs</Link>
							</p>
							<p>
								<Link className='/contact'>Contact</Link>
							</p>
							
						</div>
					</Col>
				</Row>

			</Container>
			<hr />
			<div className='bg-[#7A1CCB] p-0 m-0  text-white'>
				<div className="flex p-2">
					<Col md={6} sm={6} xs={12} >
						<p className='text-center '>
							Copyright &copy; 2024 All Rights Reserved by
							<span className="text-white font-semibold"> UO</span>
						</p>
					</Col>
					<Col md={6} sm={6} xs={12} className="p-0 m-0 ">
						<p className='text-center w-full'>Developed by 3-Star⭐</p>
					</Col>
				</div>
			</div>
		</footer>
	)
}

export default Footer
