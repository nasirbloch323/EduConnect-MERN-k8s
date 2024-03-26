import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllEvent } from "@/redux/event/eventHandle"
import AllEvents from "./AllEvents"
import CreateEvent from "./CreateEvent"
function EventPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllEvent())
	}, [dispatch])
	return (
		<div className='w-full py-6'>
			<div className='container flex flex-col gap-4 px-4 md:px-6'>
				<CreateEvent />
				<AllEvents />
			</div>
		</div>
	)
}
export default EventPage
