import { useState } from "react"
import {
	CssBaseline,
	Box,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppBar, Drawer } from "../../components/styles"
import Logout from "../Logout"
import DevSideBar from "./DevSideBar"
import DevHomePage from "../developer/DevHomePage"
import SeeComplains from "../student/StudentComplain"

import DeveloperProfile from "./DeveloperProfile"
import DevMenu from "@/pages/developer/DevMenu"
import AllAdmin from "./admin/AllAdmin"
import UpdateAdmin from "./admin/UpdateAdmin"
import AddAdmin from "./admin/AddAdmin"
import AnnPage from "./announcements/AnnPage"
import EventPage from "./events/EventPage"
import ContactPage from "./recived_contact_forms/ContactPage"
import SinglePageDetails from "@/components/FrontUIComponent/container/SinglePageDetails"


const DevDashboard = () => {
	const [open, setOpen] = useState(false)
	const toggleDrawer = () => {
		setOpen(!open)
	}

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar open={open} position='absolute'>
					<Toolbar sx={{ pr: "24px" }}>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='open drawer'
							onClick={toggleDrawer}
							sx={{
								marginRight: "36px",
								...(open && { display: "none" }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component='h1'
							variant='h6'
							color='inherit'
							noWrap
							sx={{ flexGrow: 1 }}
						>
							Dev Dashboard
						</Typography>
						<DevMenu />
					</Toolbar>
				</AppBar>
				<Drawer
					variant='permanent'
					open={open}
					sx={open ? styles.drawerStyled : styles.hideDrawer}
				>
					<Toolbar sx={styles.toolBarStyled}>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List component='nav'>
						<DevSideBar />
					</List>
				</Drawer>
				<Box component='main' sx={styles.boxStyled}>
					<Toolbar />
					<Routes>
						<Route path='/' element={<DevHomePage />} />
						<Route path='*' element={<Navigate to='/' />} />
						<Route path='/Developer/dashboard' element={<DevHomePage />} />
						<Route path='/Developer/all-admin' element={<AllAdmin />} />

						<Route path='/Developer/add-admin' element={<AddAdmin />} />
						<Route path='/Developer/update-admin' element={<UpdateAdmin />} />

						<Route path='/Developer/profile' element={<DeveloperProfile />} />
						<Route path='/Developer/complains' element={<SeeComplains />} />

						<Route path='/Developer/announcement' element={<AnnPage />} />
						<Route path='/Developer/events' element={<EventPage />} />
						<Route path='/Developer/contact' element={<ContactPage />} />


						<Route path='/logout' element={<Logout />} />
					</Routes>
				</Box>
			</Box>
		</>
	)
}

export default DevDashboard

const styles = {
	boxStyled: {
		backgroundColor: (theme) =>
			theme.palette.mode === "light"
				? theme.palette.grey[100]
				: theme.palette.grey[900],
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
	},
	toolBarStyled: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		px: [1],
	},
	drawerStyled: {
		display: "flex",
	},
	hideDrawer: {
		display: "flex",
		"@media (max-width: 600px)": {
			display: "none",
		},
	},
}
