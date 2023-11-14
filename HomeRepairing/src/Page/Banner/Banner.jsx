import React from "react";
import bannerImg from "../../assets/images/min.png";

export default function Banner() {
	return (
		<div className="banner-area">
			<div className="flex-box">
				<div className="left-site">
					<img src={bannerImg} alt="banner img" />
				</div>
				<div className="right-site">
					<div className="content">
						<h1>Home Repair Services</h1>
						<p>
							Find amazing home repair services tailored for you. Handy connects
							you with amazing home repair professionals.
						</p>
						<button>Contact us</button>
					</div>
				</div>
			</div>
		</div>
	);
}
