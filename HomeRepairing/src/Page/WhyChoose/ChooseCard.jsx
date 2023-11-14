import React from "react";
import img1 from "../../assets/images/44.jpg";
import img2 from "../../assets/images/1111.jpg";
import img3 from "../../assets/images/f.jpg";
import img4 from "../../assets/images/r5.jpg";

export default function ChooseCard() {
	const ChooseInfo = [
		{
			id: "01",
			title: "HIGH-QUALITY",
			img: img1,
			description:
				"We use high-quality materials, professional tools and supplies, and attention to detail not found in most home improvement companies. From small jobs to large ones, you can rely on the experience",
		},
		{
			id: "02",
			title: "PROFESSIONALISM",
			img: img2,
			description:
				"Our repair experts are professionals with an average of 10 years of trade experience. While you'll find that each of our repair pros behave and communicate professionally.",
		},
		{
			id: "03",
			title: "FLEXIBILITY",
			img: img3,
			description:
				"You don't have to pay the most to get great work. Because each home repair project is unique, we create a customized plan that fits each customers' specific needs and expectations.",
		},
		{
			id: "04",
			title: "COURTEOUS",
			img: img4,
			description:
				"We see this as an opportunity to save our customers time, energy, and frustration. Our customers also appreciate the timely communication we provide regarding their questions and concerns.",
		},
	];

	return (
		<div className="why-choose-section">
			<div className="title">
				<h2>Why Choose Our Company For Your Home Repairs?</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<br />

			<div className="flex-box">
				{ChooseInfo.map((item, index) => {
					return (
						<div className="choose-card" key={index}>
							<div className="header">
								<img src={item.img} alt="image" />
							</div>
							<div className="body">
								<h2>{item.title}</h2>
								<br />
								<p>{item.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
