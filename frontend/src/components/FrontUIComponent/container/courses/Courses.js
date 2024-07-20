import React from "react"
import "./courses.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"

function Courses() {
	const { researchs } = useSelector((state) => state.researchs)

	return (
		<>
			<div className='container23  mt-5 mb-5 '>
				<h1 className='a-title pb-2 pl-0 ml-0 m-0'>
					RESEARCH IN<strong className='a-titles'> LIMELIGHT</strong>
				</h1>
				<div className='row'>
					{researchs && researchs.length > 0 ? (
						researchs.map((research, i) => {

							return (
								<CardStyle key={i} research={research} />
							);
						})
					) : (
						<div className="flex relative my-5 items-center justify-center ">
							<div class="loader mb-5">Loading
								<span></span>
							</div>
						</div>
					)}



				</div>
			</div>
		</>
	)
}
const CardStyle = ({ research }) => {
	const truncatedtitle = research.title.split(" ").slice(0, 7).join(" ") + "...";
	const truncatedDesc = research.desc.split(" ").slice(0, 15).join(" ") + "...";
	return (
		<div className='p-0 m-0 a-card mt-2 col-md-3' >
			<div className='p-0 card-r center'>
				<Link to='' className='w-100'>
					<img src={research.image.url} className='p-1 w-100 h-40' alt=' ' />
				</Link>

				<div className='middle3'>
					<div className='text-white '>
						{" "}
						<h5 className='fs-6 bg-[#7A1CCB] p-2  uppercase'>
							{truncatedtitle}
						</h5>
					</div>
				</div>
			</div>
			<div className=''>
				<h5 className='p-2 text-black uppercase fs-6'>{truncatedDesc}</h5>
			</div>
		</div>
	)
}

export default Courses
