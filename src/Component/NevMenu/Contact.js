
import React, {useState} from 'react'

import './Contact.css'


function Contact() {

  const [data, setData] = useState({
    name: "",
    last: "",
    email: "",
    message: "",
    mobile: "",
  })

  const { name, last, email, message, mobile, } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try{
      const response = await fetch("https://v1.nocodeapi.com/sudhanshu/google_sheets/CdgrJqdJPQODxkhB?tabId=Sheet1",{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'

        },
        body: JSON.stringify([[name, last, email, message, mobile,  ]]),
      })
      
    }catch (err){
      console.log(err)
    }
  }

  return (
    <>
    <div className='ma' >
      <div className='bulr'>
        <div className='fullpage'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.886452425372!2d78.5373843145856!3d17.36919598808945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913a97525a8d%3A0xefd4043d6ab6d0f!2sAndy%20Softwares%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1679984063228!5m2!1sen!2sin" width="600" height="450"  allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <div className='form-box'>
            <form onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder='First Name' value={name} onChange={handleChange} />


              <input placeholder='Last Name'  name='last'  type="text" value={last} onChange={handleChange} />

              <input placeholder='Email' name='email' type="email" value={email} onChange={handleChange} />

              <input placeholder='Phone Number' name='mobile' type="number" value={mobile}  onChange={handleChange} />

              <textarea placeholder='Your Message...' name='message' type="text" value={message} onChange={handleChange} />
              <div className='btn'>
              <button>SEND MESSAGE NOW</button>
              </div>
              

            </form>
          </div>
        </div>
    
      </div>
    </div>
    </>
  )
}

export default Contact
