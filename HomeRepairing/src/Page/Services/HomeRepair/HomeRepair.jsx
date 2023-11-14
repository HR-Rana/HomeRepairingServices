import React from "react";
import img from '../../../assets/images/77.jpg'

export default function HomeRepair() {
	return (
		<div className="home-service">
			<div className="flex-box">
				<div className="left">
					<h2>Home Repair Services For the Inside</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Leo duis ut diam quam nulla porttitor.</p>
                    <br />
                   <button>Learn More</button>
				</div>
                <div className="rightimg">
                    <img src={img} alt="image" />
                </div>
			</div>
		</div>
	);
}
