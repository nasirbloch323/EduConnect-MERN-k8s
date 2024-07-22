import React from "react"
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap"
import logo from "../../../../../src/assets/logo.jpeg"
import "./header.css"
import { Link } from "react-router-dom"
// import Topnavbar from "./Topnavbar";

function Topbar() {
	return (
		<>
			<Navbar
				expand='lg'
				className='topbar text-capitalize'
				style={{ backgroundColor: "#fff" }}
			>
				<Navbar.Brand href='/' className='p-0 m-0 logo'>
					<img src={logo} alt='logo' className='header-logo' />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='p-0 m-0 mobile-humber'
				/>
				<Navbar.Collapse id='basic-navbar-nav w-100 border-0 p-0 m-0'>
					<Nav className='mx-auto '>
						<button className='dropbtn'>
							<Link to='/' className='nav-items '>
								{" "}
								Home
							</Link>
						</button>
						<div className='dropdown'>
							<button className='dropbtn'>
								<Link to='/' className='nav-items '>
									{" "}
									Administration
								</Link>
							</button>
							<div className='dropdown-content '>
								<Link className='dropdown-item ' to='/courses'>
									Courses
								</Link>
								<Link className='dropdown-item ' to='/gallery'>
									gallery
								</Link>
								<Link className='dropdown-item ' href='/events'>
									events
								</Link>
							</div>
						</div>
						<div className='megamenu'>
							<button className='megamenu__option-label'>
								<Link to='/admission' className='nav-items '>
									{" "}
									Admission
								</Link>
							</button>
							{/* <div className='megamenu__option-children'>
								<div className='megamenu__option'>
									<div className='megamenu__option-label'>
										FACULTY OF COMPUTING
									</div>
									<div className='megamenu__option-children'>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>
												Deparment of CS
											</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>Group Two</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>Group Three</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='megamenu__option'>
									<div className='megamenu__option-label'>
										FACULTY OF COMPUTING
									</div>
									<div className='megamenu__option-children'>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>Group One</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>Group Two</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='megamenu__option'>
											<div className='megamenu__option-label'>Group Three</div>
											<div className='megamenu__option-children'>
												<div className='megamenu__options-wrapper'>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the first leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the second leaf.
														</div>
													</div>
													<div className='megamenu__option'>
														<div className='megamenu__option-label megamenu__option-label--leaf'>
															I am the third leaf.
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>

						<div className='dropdown'>
							<button className='dropbtn'>
								<Link to='/faculty' className='nav-items '>
									Faculties
								</Link>
							</button>
							<div className='dropdown-content '>
								<div className='dropdown1'>
									<Link className='dropdown-item dropbtn1' to='/courses'>
										Courses
									</Link>
									<div className='dropdown-content1 '>
										<Link className='dropdown-item ' to='/gallery'>
											gallery
										</Link>
										<Link className='dropdown-item ' href='/events'>
											events
										</Link>
									</div>
								</div>

								<Link className='dropdown-item ' to='/gallery'>
									gallery
								</Link>
								<Link className='dropdown-item ' href='/events'>
									events
								</Link>
							</div>
						</div>
						<button className='dropbtn'>
							<Link to='/about' className='nav-items '>
								{" "}
								About
							</Link>
						</button>

						<button className='dropbtn'>
							<Link to='/acadmic' className='nav-items '>
								{" "}
								Academic
							</Link>
						</button>
						<button className=''>
							<Link to='/directorates' className=' nav-items'>
								{" "}
								directorates
							</Link>
						</button>
					</Nav>
					<Form inline>
						<Button className='login-header-btn'>
							<Link to='/login' className='link'>
								STARTED
							</Link>
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Topbar
