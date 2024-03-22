import React from "react"
import img from "../../../../src/assets/about.jpg"
import "./anouncment.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader2 } from "lucide-react"

function Anoucment() {
	const { annList } = useSelector((state) => state.ann)
	return (
		<>
			<div className='container anouncment'>
				<h1 className='a-title'>
					Latest <strong className='a-titles'>Annocment</strong>
				</h1>
				<div className='space-x-2 row '>
					{annList && annList.length > 0 ? (
						annList.map((ann, i) => {
							return (
								<div
									key={i}
									className='p-1 a-card col-md-3 '
									data-aos='zoom-in-up'
								>
									<div className=' card1'>
										<img src={img} className='card-img-top ' alt='...' />
										<div className='p-2 card-body'>
											<h5 className='card-title'>{ann.title}</h5>
											<p className='card-text1'>{ann.description}</p>
											<Link to='/' className='news-header-btn '>
												Learn More
											</Link>
										</div>
									</div>
								</div>
							)
						})
					) : (
						<div className='flex items-center justify-center py-2 gap-x-2'>
							<Loader2 className='w-6 h-6 animate-spin a-titles' />
							<h2 className='animate-pulse'>Loading...</h2>
						</div>
					)}
					{/* <div className='p-1 a-card col-md-3' data-aos='zoom-in-up'>
						<div className=' card1'>
							<img src={img} className='card-img-top ' alt='...' />
							<div className='p-2 card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text1'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<Link to='/' className='news-header-btn'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
					<div className='p-1 a-card col-md-3' data-aos='zoom-in-up'>
						<div className=' card1'>
							<img src={img} className='card-img-top ' alt='...' />
							<div className='p-2 card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text1'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<Link to='/' className='news-header-btn'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
					<div className='p-1 a-card col-md-3' data-aos='zoom-in-up'>
						<div className=' card1'>
							<img src={img} className='card-img-top ' alt='...' />
							<div className='p-2 card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text1'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<Link to='/' className='news-header-btn'>
									Learn More
								</Link>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	)
}

export default Anoucment
