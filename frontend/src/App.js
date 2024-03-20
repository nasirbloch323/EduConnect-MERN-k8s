import React from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import { useSelector } from "react-redux"
import Homepage from "./pages/Homepage"
import AdminDashboard from "./pages/admin/AdminDashboard"
import StudentDashboard from "./pages/student/StudentDashboard"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"
import LoginPage from "./pages/LoginPage"
import AdminRegisterPage from "./pages/admin/AdminRegisterPage"
// import ChooseUser from "./pages/ChooseUser"
import HomePage from "./pages/FrontUIPages/HomePage"
import AboutPage from "./pages/FrontUIPages/AboutPage"
import CoursesPage from "./pages/FrontUIPages/CoursesPage"
import FacultyPage from "./components/FrontUIComponent/components/Faculty/FacultyPage"
import Event from "./components/FrontUIComponent/components/Events/Event"
import AOS from "aos"
import "aos/dist/aos.css"
import Notify from "./components/FrontUIComponent/components/Notification/Notify"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AcadmicPage from "./pages/FrontUIPages/AcadmicPage"
// import Login from "./pages/Login"
import DevRegister from "./pages/developer/DevRegister"
import DevDashboard from "./pages/developer/DevDashboard"

import ContactPage from "./pages/FrontUIPages/ContactPage"
import PageNotFound from "./components/FrontUIComponent/PageNotFound/PageNotFound"

const App = () => {
	AOS.init({
		duration: 900,
	})

	const { currentRole } = useSelector((state) => state.user)

	return (
		<Router>
			{currentRole === null && (
				<Routes>
					<Route path='/login' element={<Homepage />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/courses' element={<CoursesPage />} />
					<Route path='/notification' element={<Notify />} />
					<Route path='/faculty' element={<FacultyPage />} />
					<Route path='/events' element={<Event />} />
					<Route path='/acadmic' element={<AcadmicPage />} />
					<Route path='/contact' element={<ContactPage />} />

					{/* <Route path='/log' element={<Login />} /> */}
					{/* <Route path="/choose" element={<ChooseUser visitor="normal" />} /> */}
					{/* Tabs added here */}
					{/* <Route path='/choose' element={<LoginPage visitor='normal' />} /> */}
					<Route path="/Developerregister" element={<DevRegister />} />
					<Route path="/Developerlogin" element={<LoginPage role="Developer" />} />
					<Route path='/Studentlogin' element={<LoginPage role='Student' />} />
					<Route path='/Teacherlogin' element={<LoginPage role='Teacher' />} />
					<Route path='/Adminregister' element={<AdminRegisterPage />} />
					<Route path='/Adminlogin' element={<LoginPage role='Admin' />} />

					{/* <Route path='*' element={<Navigate to="/" />} /> */}
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			)}

			{currentRole === "Developer" && (
				<>
					<DevDashboard />
				</>
			)}
			{currentRole === "Admin" && (
				<>
					<AdminDashboard />
				</>
			)}

			{currentRole === "Student" && (
				<>
					<StudentDashboard />
				</>
			)}

			{currentRole === "Teacher" && (
				<>
					<TeacherDashboard />
				</>
			)}
			<ToastContainer />
		</Router>
	)
}

export default App
