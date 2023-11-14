import React from "react";
import img from "../../../assets/images/download (1).png";
import img2 from "../../../assets/images/download (2).png";
import img3 from "../../../assets/images/download (3).png";
import img4 from "../../../assets/images/download (4).png";

export default function OurServices() {
	const serviceInfo = [
		{
			id: "01",
			title: "Carpentry",
			img: img,
		},
		{
			id: "02",
			title: "Carpentry",
			img: img2,
		},
		{
			id: "03",
			title: "Carpentry",
			img: img3,
		},
		{
			id: "04",
			title: "Carpentry",
			img: img4,
		},
	];
	return (
		<div className="our-services">
			<h2>Our Services</h2>
			<div className="flex-box">
				{serviceInfo.map((item) => {
					return (
						<div className="service-card" key={item.id}>
							<img src={item.img} alt="" />
							<h3>{item.title}</h3>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt
							</p>
							<a href="#">More</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
