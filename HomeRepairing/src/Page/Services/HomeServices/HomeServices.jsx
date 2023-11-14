import React from "react";
import img from "../../../assets/images/download.png";

export default function HomeServices() {
	const homeRepair = [
		{
			id: "01",
			img: img,
			title: "Kitchen Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "02",
			img: img,
			title: "Grout Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "03",
			img: img,
			title: "Countertop Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "04",
			img: img,
			title: "Shower Head Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "05",
			img: img,
			title: "Bathroom Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "06",
			img: img,
			title: "Toilet Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "07",
			img: img,
			title: "Sink Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "08",
			img: img,
			title: "Ceiling Fan Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
		{
			id: "09",
			img: img,
			title: "Light Fixture Repair",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.",
		},
	];

	return (
		<div className="home-repair-service">
			<h2>Home Repair Services</h2>
			<div className="flex-box">
				{homeRepair.map((item) => {
					return <div className="repair-card" key={item.id}>
            <img src={item.img} alt="" />
            <br />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>;
				})}
			</div>

      <button>
        learn more
      </button>
		</div>
	);
}
