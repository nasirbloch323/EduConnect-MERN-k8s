import * as React from "react"
import {
	Divider,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material"
import { Link, useLocation } from "react-router-dom"

import HomeIcon from "@mui/icons-material/Home"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined"
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined"
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined"
import ReportIcon from "@mui/icons-material/Report"
import AssignmentIcon from "@mui/icons-material/Assignment"

const SideBar = () => {
	const location = useLocation()
	return (
		<>
			<React.Fragment>
				<ListItemButton component={Link} to='/'>
					<ListItemIcon>
						<HomeIcon
							color={
								location.pathname === ("/" || "/Developer/dashboard")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/all-admin'>
					<ListItemIcon>
						<ClassOutlinedIcon
							color={
								location.pathname.startsWith("/Developer/admins")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Admin' />
				</ListItemButton>
				{/* <Divider sx={{ my: 1 }} /> */}
				<ListItemButton component={Link} to='/Developer/announcement'>
					<ListItemIcon>
						<AssignmentIcon
							color={
								location.pathname.startsWith("/Developer/admin")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Anoucment' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/events'>
					<ListItemIcon>
						<SupervisorAccountOutlinedIcon
							color={
								location.pathname.startsWith("/Developer/admin")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Events' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/admin'>
					<ListItemIcon>
						<PersonOutlineIcon
							color={
								location.pathname.startsWith("/Developer/admin")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Notifications' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/admin'>
					<ListItemIcon>
						<AnnouncementOutlinedIcon
							color={
								location.pathname.startsWith("/Developer/admin")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Research' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/admin'>
					<ListItemIcon>
						<ReportIcon
							color={
								location.pathname.startsWith("/Developer/admin")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Blogs' />
				</ListItemButton>
				<ListItemButton component={Link} to='/Developer/profile'>
					<ListItemIcon>
						<AccountCircleOutlinedIcon
							color={
								location.pathname.startsWith("/Developer/profile")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='All Contact ' />
				</ListItemButton>
			</React.Fragment>
			<Divider sx={{ my: 1 }} />
			<React.Fragment>
				<ListSubheader component='div' inset>
					User
				</ListSubheader>
				<ListItemButton component={Link} to='/Developer/profile'>
					<ListItemIcon>
						<AccountCircleOutlinedIcon
							color={
								location.pathname.startsWith("/Developer/profile")
									? "primary"
									: "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='Profile' />
				</ListItemButton>
				<ListItemButton component={Link} to='/logout' className='bg-[#552285]'>
					<ListItemIcon>
						<ExitToAppIcon
							color={
								location.pathname.startsWith("/logout") ? "primary" : "inherit"
							}
						/>
					</ListItemIcon>
					<ListItemText primary='Logout' />
				</ListItemButton>
			</React.Fragment>
		</>
	)
}

export default SideBar
