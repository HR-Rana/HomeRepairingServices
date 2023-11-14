import React from "react";

import email from "../../assets/images/email .png";
import whatsapp from "../../assets/images/whatsapp.png";
import messanger from "../../assets/images/download (5).png";

export default function Contact() {
	return (
		<div className="contact">
			<div className="flex-box">
				<div className="content">
					<span>
						<img src={email} alt="" />
					</span>
					<div>
						<h4>Email</h4>
						<p>
							Email us using our simple form and we'll respond within 10 working
							days.
						</p>
						<span>
							<input
								type="email"
								placeholder="enter your email"
								className="form-control"
							/> <br />
							<button>Submit</button>
						</span>
					</div>
				</div>
				<div className="content">
					<span>
						<img src={whatsapp} alt="" />
					</span>
					<div>
						<h4>Whatsapp Support</h4>
						<p>Add us on WhatsApp & send queries for instant reply.</p>
						<span>
							<button>+12-345-678-89089</button>
						</span>
					</div>
				</div>
				<div className="content">
					<span>
						<img src={messanger} alt="" />
					</span>
					<div>
						<h4>Live Chat</h4>
						<p>The fastest way to get in touch with an Expert</p>
						<span>
							<button>Live Chat</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
