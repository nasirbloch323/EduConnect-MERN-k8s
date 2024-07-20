import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import moment from "moment"
import Topnavbar from "./header/Topnavbar"
import Topbar from "./header/Topbar"

function SinglePageDetails() {
	const { id } = useParams()

	const { items: data, loading } = useSelector((state) => state.products) // Also get loading state
	const [announcement, setAnnouncement] = useState(null)
	// console.log({ announcement })

	useEffect(() => {
		// Only try to find the announcement if data is available and not loading
		if (data && !loading) {
			const foundAnnouncement = data.find((ann) => ann._id === id)
			// console.log({ foundAnnouncement })
			setAnnouncement(foundAnnouncement)
		}
		// console.log(id)
	}, [])

	return (
		<>
			<Topnavbar />
			<Topbar />
			<div className='container single-page-details'>
				{loading ? (
					<div className='mt-5 text-center'>
						<p>Loading...</p>
					</div>
				) : announcement ? (
					<>
						<h1 className='a-title'>Announcement Details</h1>
						<div className='card'>
							<img
								src={announcement.image?.url}
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>{announcement.name}</h5>
								<p className='card-text'>{announcement.desc}</p>
								<p className='card-text'>
									<small className='text-muted'>
										Date: {moment(announcement.date).format("MM/DD/YYYY")}
									</small>
								</p>
							</div>
						</div>
					</>
				) : (
					<div className='mt-5 text-center'>
						<p>Announcement not found.</p>
					</div>
				)}
			</div>
		</>
	)
}

export default SinglePageDetails
