import { Typography } from "@mui/material"
import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"
import AssignmentTem from "../../components/FrontUIComponent/components/students/AssignmentTem"
const StudentAssignments = () => {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className='my-2'>
			<Typography variant='h4' align='center' gutterBottom>
				Assignments Details
			</Typography>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
					>
						<Tab label='Pending' {...a11yProps(0)} />
						<Tab label='Submitted' {...a11yProps(1)} />
						<Tab label='Declined' {...a11yProps(2)} />
					</Tabs>
				</Box>

				<CustomTabPanel value={value} index={0}>
					<div className='flex flex-col gap-3'>
						<AssignmentTem />
						<AssignmentTem />
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<div className='flex flex-col gap-3'>
						<AssignmentTem submited />
						<AssignmentTem submited />
					</div>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<div className='flex flex-col gap-3'>
						<AssignmentTem decline />
						<AssignmentTem decline />
					</div>
				</CustomTabPanel>
			</Box>
		</div>
	)
}

export default StudentAssignments

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}
