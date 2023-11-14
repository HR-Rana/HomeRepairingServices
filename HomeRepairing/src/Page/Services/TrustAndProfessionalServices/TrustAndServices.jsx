import React from "react";
import img from "../../../assets/images/eee-min.jpg";
import img from "../../../assets/images/checked(1).png";

export default function TrustAndServices() {
	return (
		<div className="trust-and-professional-services">
			<div className="flex-box">
				<div className="left-site">
					<img src={img} alt="image" />
				</div>
				<div className="right-site-content">
					<h2>Reliable, Trusted, and Professional Services</h2>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<div className="flex-box">
						<span>
							<img src={img} alt="image" />
							<li>Office</li>
						</span>
						<span>
							<img src={img} alt="image" />
							<li>Kitchen</li>
						</span>
						<span>
							<img src={img} alt="image" />
							<li> Living Room</li>
						</span>
						<span>
							<img src={img} alt="image" />
							<li> Basement</li>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
