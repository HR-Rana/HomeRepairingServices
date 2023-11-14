import React from 'react'
import img from '../../../assets/images/right.png'


export default function ProfessionalServices() {
    const content = [
        {
            id:"01",
            title:"ELECTRICAL SERVICES",
            text:"Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Purus in mollis nunc sed id semper risus. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Sed libero enim sed faucibus turpis in eu mi. Ornare arcu dui vivamus arcu."
        },
        {
            id:"02",
            title:"REPAIR SERVICES",
            text:"Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Purus in mollis nunc sed id semper risus. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Sed libero enim sed faucibus turpis in eu mi. Ornare arcu dui vivamus arcu."
        },
        {
            id:"03",
            title:"TIPS & IDEAS",
            text:"Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Purus in mollis nunc sed id semper risus. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Sed libero enim sed faucibus turpis in eu mi. Ornare arcu dui vivamus arcu."
        }
    ]

  return (
    <div className='professional-services'>
        <div>
            <h2>Professional Services</h2><br />
            <p>We’ll Leave Your Home Safer Than We Found It</p>
        </div>
        <div className="flex-box">
            {
                content.map(item=>{
                    return <div className='card' key={item.id}>
                        <h3>{item.title}</h3>
                        <br />
                        <p>{item.text}</p>
                        <br />
                        <img src={img} alt="" />
                    </div>
                })
            }
        </div>
    </div>
  )
}
