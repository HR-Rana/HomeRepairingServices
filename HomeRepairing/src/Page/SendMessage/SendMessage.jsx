import React from "react";

import img1 from '../../assets/images/rf.jpg'
import img2 from '../../assets/images/rtr.jpg'



export default function SendMessage() {

  const content = [
    {
      id:"01",
      title:"Send us a message",
      img:img1,
      text:"Email us using our simple form and we'll respond within 10 working days.",
      button:"Send Us a Message"
    },
    {
      id:"02",
      title:"Make a complaint",
      img:img2,
      text:"If you're not happy with the service you've received from Our Company, call us or send us an email and let us know.",
      button:"Make a Complaint"
    }
  ]

	return (
		<div className="sendus-message">
			<h2>Send us a message</h2>
      <br />
      <div className="flex-box">
        {
          content.map(item =>{
            return(
              <div className="content" key={item.id}>
                <span>
                  <img src={item.img} alt="img" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button>{item.button}</button>
              </div>
            )
          })
        }
      </div>
		</div>
	);
}
