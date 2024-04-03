import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import AllResearchs from "./AllResearchs"
import CreateResearch from "./CreateResearch"
import { getAllResearch } from "@/redux/researchs/researchHandle"

function ResearchPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllResearch())
	}, [dispatch])
	return (
		<div className='w-full py-6'>
			<div className='container flex flex-col gap-4 px-4 md:px-6'>
				<CreateResearch />
				<AllResearchs />
			</div>
		</div>
	)
}
export default ResearchPage
