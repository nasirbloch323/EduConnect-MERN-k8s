import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
	Grid,
	Box,
	Typography,
	Paper,
	Checkbox,
	FormControlLabel,
	TextField,
	CssBaseline,
	IconButton,
	InputAdornment,
	CircularProgress,
	Backdrop,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Visibility, VisibilityOff } from "@mui/icons-material"
// import bgpic from "../assets/designlogin.jpg"
import bgpic from "../assets/login-logo.png"
import { LightPurpleButton } from "../components/buttonStyles"
import Topbar from "../components/FrontUIComponent/container/header/Topbar"
import styled from "styled-components"
import { loginUser } from "../redux/userRelated/userHandle"
import Popup from "../components/Popup"
import { toast } from "react-toastify"

import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"



import logo from "../assets/login-logo-1.png"
import vectorArt from "../assets/login-logo-1.png"
import axios from "axios"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const defaultTheme = createTheme()

const LoginPage = ({ role }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [Role, setRole] = useState("student")
	const { status, currentUser, response, error, currentRole } = useSelector(
		(state) => state.user
	)

	const [toggle, setToggle] = useState(false)
	const [guestLoader, setGuestLoader] = useState(false)
	const [loader, setLoader] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [message, setMessage] = useState("")

	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [rollNumberError, setRollNumberError] = useState(false)
	const [studentNameError, setStudentNameError] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log({ Role })
		if (Role === "student") {
			const rollNum = event.target.rollNumber.value
			const studentName = event.target.studentName.value
			const password = event.target.password.value

			if (!rollNum || !studentName || !password) {
				if (!rollNum) setRollNumberError(true)
				if (!studentName) setStudentNameError(true)
				if (!password) setPasswordError(true)
				return
			}
			const fields = { rollNum, studentName, password }
			setLoader(true)
			dispatch(loginUser(fields, role))
		} else {
			const email = event.target.email.value
			const password = event.target.password.value

			if (!email || !password) {
				if (!email) setEmailError(true)
				if (!password) setPasswordError(true)
				return
			}

			const fields = { email, password }
			setLoader(true)
			dispatch(loginUser(fields, role))
		}
	}

	const handleInputChange = (event) => {
		const { name } = event.target
		if (name === "email") setEmailError(false)
		if (name === "password") setPasswordError(false)
		if (name === "rollNumber") setRollNumberError(false)
		if (name === "studentName") setStudentNameError(false)
	}

	useEffect(() => {
		if (status === "success" || currentUser !== null) {
			if (currentRole === "Developer") {
				navigate("/Developer/dashboard")
			}
			if (currentRole === "Admin") {
				navigate("/Admin/dashboard")
			} else if (currentRole === "Student") {
				toast.success("Login Successfully")
				navigate("/Student/dashboard")
			} else if (currentRole === "Teacher") {
				toast.success("Login Successfully")
				navigate("/Teacher/dashboard")
			}
		} else if (status === "failed") {
			setMessage(response)
			setShowPopup(true)
			setLoader(false)
		} else if (status === "error") {
			setMessage("Network Error")
			setShowPopup(true)
			setLoader(false)
			setGuestLoader(false)
		}
	}, [status, currentRole, navigate, error, response, currentUser])

	return (
		<>
			<Topbar />

			<ThemeProvider theme={defaultTheme}>
				<Grid container component='main' sx={{ height: "100vh" }}>
					<CssBaseline />
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						component={Paper}
						elevation={6}
						square
					>
						<Box className="ml-4 d-flex align-items-center justify-content-start">
                            <button className="btn btn-secondary text-sm ">
                                <i className="fas fa-book me-2"></i> User Manual
                            </button>
                        </Box>

						<Box
							sx={{
								my: 3,
								mx: 5,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
						 
							{/* <Typography variant='h7'>
								Welcome back! Please enter your details
							</Typography>  */}
							<Box
								component='form'
								noValidate
								onSubmit={handleSubmit}
								sx={{ mx: 2 }}
							>
								
								<Tabs
									defaultValue='student'
									className='flex flex-col '
									onValueChange={(e) => {
										e === "student" ? setRole("student") : setRole("")
									}}
								>
									<TabsList className='w-full'>
										<Link to='/Studentlogin'>
											<TabsTrigger className="bg-[#552285] p-1 m-0 text-xs text-[#fff]" value="student">
												<UserIcon className="h-7 w-5 mr-1" />
          Student Login
        </TabsTrigger></Link>
										<Link to='/Adminlogin'>
											<TabsTrigger className="bg-[#552285] p-1 m-0 text-xs text-[#fff]" value="admin">
												<ShieldIcon className="h-7 w-5 mr-1" />
          Admin Login
        </TabsTrigger>
										</Link>
										<Link to='/Teacherlogin'>
											<TabsTrigger className="bg-[#552285] p-1 m-0 text-xs text-[#fff] " value="teacher">
												<BookIcon className="h-7 w-5 mr-1" />
          Teacher Login
        </TabsTrigger></Link>
									</TabsList>
									<Typography
								variant='h4'
								sx={{ mb: 2, color: "#2c2143" }}
								className='fs-3 pt-4 text-center p-0 m-0'
							>
								{role} Login
							</Typography>
									<Typography variant='h7' className='pt-1 m-0 text-center'>
										Welcome back! Please enter your details {currentUser}
									</Typography>

									<TabsContent value='teacher'>

										<TextField
											margin='normal'
											required
											fullWidth
											id='email'
											label='Enter your email'
											name='email'
											autoComplete='email'
											autoFocus
											error={emailError}
											helperText={emailError && "Email is required"}
											onChange={handleInputChange}
										/>

										<TextField
											margin='normal'
											required
											fullWidth
											name='password'
											label='Password'
											type={toggle ? "text" : "password"}
											id='password'
											autoComplete='current-password'
											error={passwordError}
											helperText={passwordError && "Password is required"}
											onChange={handleInputChange}
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton onClick={() => setToggle(!toggle)}>
															{toggle ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												),
											}}
										/>
									</TabsContent>
									<TabsContent value='student'>
										<TextField
											margin='normal'
											required
											fullWidth
											id='rollNumber'
											label='Enter your Roll Number'
											name='rollNumber'
											autoComplete='off'
											type='number'
											autoFocus
											error={rollNumberError}
											helperText={rollNumberError && "Roll Number is required"}
											onChange={handleInputChange}
										/>
										<TextField
											margin='normal'
											required
											fullWidth
											id='studentName'
											label='Enter your name'
											name='studentName'
											autoComplete='name'
											autoFocus
											error={studentNameError}
											helperText={studentNameError && "Name is required"}
											onChange={handleInputChange}
										/>
										<TextField
											margin='normal'
											required
											fullWidth
											name='password'
											label='Password'
											type={toggle ? "text" : "password"}
											id='password'
											autoComplete='current-password'
											error={passwordError}
											helperText={passwordError && "Password is required"}
											onChange={handleInputChange}
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton onClick={() => setToggle(!toggle)}>
															{toggle ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												),
											}}
										/>
									</TabsContent>
									<TabsContent value='admin'>
										<TextField
											margin='normal'
											required
											fullWidth
											id='email'
											label='Enter your email'
											name='email'
											autoComplete='email'
											autoFocus
											error={emailError}
											helperText={emailError && "Email is required"}
											onChange={handleInputChange}
										/>

										<TextField
											margin='normal'
											required
											fullWidth
											name='password'
											label='Password'
											type={toggle ? "text" : "password"}
											id='password'
											autoComplete='current-password'
											error={passwordError}
											helperText={passwordError && "Password is required"}
											onChange={handleInputChange}
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<IconButton onClick={() => setToggle(!toggle)}>
															{toggle ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												),
											}}
										/>
									</TabsContent>
								</Tabs>
								<Grid
									container
									sx={{ display: "flex", justifyContent: "space-between" }}
								>
									<FormControlLabel
										control={<Checkbox value='remember' color='primary' />}
										label='Remember me'
									/>
									<StyledLink href='#'>Forgot password?</StyledLink>
								</Grid>
								<LightPurpleButton
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3 }}
								>
									{loader ? (
										<CircularProgress size={24} color='inherit' />
									) : (
											"Login"
										)}
								</LightPurpleButton>

								{/* {role === "Admin" &&
                                    <Grid container>
                                        <Grid>
                                            Don't have an account?
                                        </Grid>
                                        <Grid item sx={{ ml: 2 }}>
                                            <StyledLink to="/Adminregister">
                                                Sign up
                                            </StyledLink>
                                        </Grid>
                                    </Grid>
                                } */}
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage: `url(${bgpic})`,
							backgroundRepeat: "no-repeat",
							backgroundColor: (t) =>
								t.palette.mode === "light"
									? t.palette.grey[50]
									: t.palette.grey[900],
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
				</Grid>
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={guestLoader}
				>
					<CircularProgress color='primary' />
					Please Wait
				</Backdrop>
				<Popup
					message={message}
					setShowPopup={setShowPopup}
					showPopup={showPopup}
				/>
			</ThemeProvider>




		</>
	)
}

export default LoginPage

function BookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
		</svg>
	)
}


function ShieldIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
		</svg>
	)
}


function UserIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	)
}
const StyledLink = styled(Link)`
	margin-top: 9px;
	text-decoration: none;
	color: #7f56da;
`
