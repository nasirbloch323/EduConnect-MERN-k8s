import React, { useState } from "react";
import img from "../../../../src/assets/about.jpg";
import "./anouncment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import moment from "moment";

function Anoucment() {
	const { annList } = useSelector((state) => state.ann);
	const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

	const handleReadMore = (ann) => {
		setSelectedAnnouncement(ann);
	};

	return (
		<>
			<div className="container anouncment">
				<h1 className="a-title">
					Latest <strong className="a-titles">Announcement</strong>
				</h1>
				<div className="space-x-2 row">
					{annList && annList.length > 0 ? (
						annList.map((ann, i) => {
							const truncatedDescription =
								ann.description.split(" ").slice(0, 20).join(" ") + "...";
							return (
								<div
									key={i}
									className="p-1 a-card col-md-3"
									data-aos="zoom-in-up"
								>
									<div className="card1">
										<img src={img} className="card-img-top" alt="..." />
										<div className="p-2 card-body">
											<h5 className="card-title">{ann.title}</h5>

											{/* <p className="card-text1 mb-0 pt-1  text-[#7A1CCB]">											{moment(ann.date).format("MM/DD/YYYY")}</p> */}
											<p className="card-text1">{truncatedDescription}</p>
											<button
												className="news-header-btn"
												onClick={() => handleReadMore(ann)}
											>
												Read More
											</button>
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
