import React, { useEffect } from "react"
import CreateAnn from "./CreateAnn"
import AllAnn from "./AllAnn"
import { useDispatch } from "react-redux"
import { getAllAnn } from "@/redux/announcements/annHandle"
function AnnPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllAnn())
	}, [dispatch])
	return (
		<div className='w-full py-6'>
			<div className='container flex flex-col gap-4 px-4 md:px-6'>
				<CreateAnn />
				<AllAnn />
			</div>
		</div>
	)
}
export default AnnPage
