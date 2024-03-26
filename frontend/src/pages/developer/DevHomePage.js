import { Container, Grid, Paper } from "@mui/material"
import DevSeeNotice from "../../pages/developer/DevSeeNotice"
import Students from "../../assets/img1.png"
import Classes from "../../assets/img2.png"
import Teachers from "../../assets/img3.png"
import Fees from "../../assets/img4.png"
import styled from "styled-components"
import CountUp from "react-countup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllSclasses } from "../../redux/sclassRelated/sclassHandle"
import { getAllStudents } from "../../redux/studentRelated/studentHandle"
import { getAllTeachers } from "../../redux/teacherRelated/teacherHandle"
import { getAllAnn } from "@/redux/announcements/annHandle"
import { getAllEvent } from "@/redux/event/eventHandle"

const DevHomePage = () => {
	const dispatch = useDispatch()
	const { studentsList } = useSelector((state) => state.student)
	const { sclassesList } = useSelector((state) => state.sclass)
	const { teachersList } = useSelector((state) => state.teacher)
	const { annList } = useSelector((state) => state.ann)
	const { eventList } = useSelector((state) => state.event)

	const { currentUser } = useSelector((state) => state.user)

	const adminID = currentUser._id

	useEffect(() => {
		dispatch(getAllStudents(adminID))
		dispatch(getAllSclasses(adminID, "Sclass"))
		dispatch(getAllTeachers(adminID))
		dispatch(getAllAnn())
		dispatch(getAllEvent())
	}, [adminID, dispatch])
	console.log(annList)
	const numberOfStudents = studentsList && studentsList.length
	const numberOfClasses = sclassesList && sclassesList.length
	const numberOfTeachers = teachersList && teachersList.length
	const numberOfAnn = eventList && eventList.length

	const numberOfEvent = eventList && eventList.length
	return (
		<>
			<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Students} alt='Students' />
							<Title>Total Admin</Title>
							<Data start={0} end={numberOfStudents} duration={2.5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Students} alt='Students' />
							<Title>Total Anoucment</Title>
							<Data start={0} end={numberOfAnn} duration={2.5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Students} alt='Students' />
							<Title>Total Event</Title>
							<Data start={0} end={numberOfEvent} duration={2.5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Students} alt='Students' />
							<Title>Total Notification</Title>
							<Data start={0} end={numberOfStudents} duration={2.5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Classes} alt='Classes' />
							<Title>Total Research</Title>
							<Data start={0} end={numberOfClasses} duration={5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Teachers} alt='Teachers' />
							<Title>Total Blogs</Title>
							<Data start={0} end={numberOfTeachers} duration={2.5} />
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<StyledPaper>
							<img src={Fees} alt='Fees' />
							<Title>All Contacts</Title>
							<Data start={0} end={2} duration={2.5} prefix='' />{" "}
						</StyledPaper>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
							<DevSeeNotice />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

const StyledPaper = styled(Paper)`
	padding: 16px;
	display: flex;
	flex-direction: column;
	height: 200px;
	justify-content: space-between;
	align-items: center;
	text-align: center;
`

const Title = styled.p`
	font-size: 1.25rem;
`

const Data = styled(CountUp)`
	font-size: calc(1.3rem + 0.6vw);
	color: green;
`

export default DevHomePage
