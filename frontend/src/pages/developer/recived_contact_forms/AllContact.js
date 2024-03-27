// import LoaderCom from '@/components/component/LoaderCom'
// import { getAllContacts } from "@/redux/contactUsRelated/contactHandler"
import React from "react"
import { useSelector } from "react-redux"
import CardStyle from "./CardStyle"

const AllContact = () => {
	// const dispatch = useDispatch()
	const { contactList } = useSelector((state) => state.contact)
	// useEffect(() => {
	// 	dispatch(getAllContacts())
	// }, [dispatch])
	return (
		<div className='flex flex-col gap-4'>
			{contactList && contactList.length > 0 ? (
				contactList.map((contact) => {
					return (
						<CardStyle
							key={contact._id}
							name={contact.name}
							phoneNo={contact.phoneNo}
							email={contact.email}
							description={contact.description}
							_id={contact._id}
							address={contact.address}
						/>
					)
				})
			) : (
				<div>Currently there is no any form</div>
			)}
		</div>
	)
}

export default AllContact
