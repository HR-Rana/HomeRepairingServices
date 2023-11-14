import React from "react";
import img from "../../assets/images/-min.jpg";
import correct from "../../assets/images/checked (2).png";

export default function MeetServiceExpart() {
	return (
		<div className="meet-exparts">
			<div className="flex-box">
				<div className="left-site">
					<h3>Meet Your Home Service Experts</h3>
					<br />
					<ul>
						<span>
							<img src={correct} alt="" />
							<li>Emergency Repairs</li>
						</span>
						<span>
							<img src={correct} alt="" />
							<li>Electrical Repair</li>
						</span>
						<span>
							<img src={correct} alt="" />
							<li>Circuit Breakers</li>
						</span>
						<span>
							<img src={correct} alt="" />
							<li>Ceiling Fans</li>
						</span>
						<span>
							<img src={correct} alt="" />
							<li>Generators</li>
						</span>
					</ul>
					<div  className="button">
						<button>Learn More</button>
					</div>
				</div>
				<div className="right-site">
					<img src={img} alt="img" />
				</div>
			</div>
		</div>
	);
}
