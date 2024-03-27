import React, { useEffect } from "react"
// import CardStyle from "./CardStyle"
import AllContact from "./AllContact"
import { getAllContacts } from "@/redux/contactUsRelated/contactHandler"
import { useDispatch } from "react-redux"

const ContactPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllContacts())
	}, [dispatch])
	return (
		<div>
			All the Contact Forms Data will goes CardHeader
			<div className='p-3'>
				<AllContact />
			</div>
		</div>
	)
}

export default ContactPage
