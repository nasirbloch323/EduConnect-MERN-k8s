import React from "react"
import img from "../../../../src/assets/about.jpg"
import "./anouncment.css"
import { Link } from "react-router-dom"
function Anoucment() {
	return (
		<>
			<div className='container anouncment'>
				<h1 className='a-title'>
					Latest <strong className='a-titles'>Annocment</strong>
				</h1>
				<div className='row'>
					<div className='p-1 a-card col-md-3 ' data-aos='zoom-in-up'>
						<div className=' card1'>
							<img src={img} className='card-img-top ' alt='...' />
							<div className='card-body p-2'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text1'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<Link to='/' className='news-header-btn '>
									Learn More
								</Link>
							</div>
						</div>
					</div>
					<div className='p-1 a-card col-md-3' data-aos='zoom-in-up'>
						<div className=' card1'>
							<img src={img} className='card-img-top ' alt='...' />
							<div className='card-body p-2'>
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
							<div className='card-body p-2'>
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
							<div className='card-body p-2'>
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
				</div>
			</div>
		</>
	)
}

export default Anoucment
