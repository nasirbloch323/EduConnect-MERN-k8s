import React, { useState } from "react";
import img from "../../../../src/assets/about.jpg";
import "./anouncment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import moment from "moment";

function Anoucment() {
	const { items: data } = useSelector((state) => state.products);
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		setStartIndex(startIndex + 4);
	};

	const handlePrevious = () => {
		setStartIndex(Math.max(startIndex - 4, 0));
	};

	return (
		<>
			<div className="container anouncment">
				<h1 className="a-title">
					Latest <strong className="a-titles">Announcement</strong>
				</h1>
				<div className="flex justify-between mt-3 mb-2">
					<button className="bg-[#552285] text-white px-2 py-1 rounded-md" onClick={handlePrevious}>

						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M12.293 4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1 0 1.414l6 6a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7z" clipRule="evenodd" />
						</svg>
					</button>
					<button className="bg-[#552285] text-white px-2 py-1 rounded-md" onClick={handleNext}>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M7.707 15.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 0-1.414l-6-6a1 1 0 1 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7z" clip-rule="evenodd" />
						</svg>
					</button>
				</div>
				<div className="space-x-2 flex m-0 row">
					{data && data.length > 0 ? (
						data.slice(startIndex, startIndex + 4).map((ann, i) => {
							const truncatedDescription = ann.desc.split(" ").slice(0, 20).join(" ") + "...";
							return (
								<div
									key={i}
									className="p-1 m-0 a-card col-md-3"
								// data-aos="zoom-in-up"
								>
									<div className="card1">
										<img src={ann.image?.url} className="card-img-top" alt="..." />
										<div className="p-2 card-body">
											<h5 className="card-title">{ann.name}</h5>
											<p className="card-text1">{truncatedDescription}</p>
											<p className="card-text1 flex mb-0  text-[#7A1CCB]">
											<Link to={`/announcement/${ann._id}`} className="news-header-btn">
                                                    Read More
                                                </Link>
												<p className="fixed pr-3  right-0 pt-3 m-0">
													{moment(ann.date).format("MM/DD/YYYY")}
												</p>
											</p>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<div className="flex items-center justify-center py-2 gap-x-2">
							<Loader2 className="w-6 h-6 animate-spin a-titles" />
							<h2 className="animate-pulse">Loading...</h2>
						</div>
					)}
				</div>

			</div>
		</>
	);
}

export default Anoucment;


