import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


function Form() {


const[name,setName] = useState('')
const[phone,setPhone] = useState('')
const [email,setEmail] = useState('')
const[message,setMessage] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault()

  const serviceId='service_i73671c';
  const templateID='template_iuwlrgm';
  const publicKey='UPdZnMVLtV5GCkVjy';

  const templateParams ={
      from_name:name,
      from_email:email,
      to_name:'Web Wizard',
      message:message,
  };

  emailjs.send(serviceId,templateID,templateParams,publicKey).then((response)=>{
    console.log('Email sent successfullt:' ,response);
    setName('');
    setEmail('');
    setMessage('');
  }).catch((error)=>{
    console.erorr('Error sending email:',error);

  });

}

  return (
    <div className="contact-us-1">
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label htmlFor="fullName" className="form-label">Full Name:</label>
                      <input 
                          type="text" 
                          className="form-control" 
                          id="fullName" 
                          placeholder="Enter your fullname"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                      <input 
                          type="text" 
                          className="form-control" 
                          id="phoneNumber" 
                          placeholder="Enter you phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                       />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input 
                          type="text" 
                          className="form-control" 
                          id="email" 
                          placeholder="Example@info.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                       />
                    </div>
                    
                    <div className="col-12">
                      
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      
                    </div>
                  
                    
                    <div className="col-12">
                      <button type="submit" className="btn">Send Message</button>
                    </div>
                  </form>
                </div>
  )
}

export default Form