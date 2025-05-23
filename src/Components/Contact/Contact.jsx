import React, { useState } from 'react'
import './Contact.css'
import Autotext from '../Autotext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [result, setResult] = useState('')
  const val = ['Contact Me'];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ddf662d-7c4f-4315-946b-c1755b1673a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast("Form Submission Failed")
      setResult(data.message);
    }


  }

  return (
    <div className='contact'>

      <h1 className='contact-title'><Autotext val={val}></Autotext></h1>

      <div className='contact-section'>
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>I&apos;m always excited to connect with fellow developers, collaborators, and potential employers. Whether you have a project in mind, a question, or just want to chat about tech, feel free to reach out to me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              <p>manojkrishnachandragiri@gmail.com</p>
            </div>
            <div className="contact-detail">
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <p>+918523823805</p>
            </div>
            <div className="contact-detail">
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              <p>Guntur/Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email'/>
          <label htmlFor="">Write Your Message</label>
          <textarea name='message' rows="10" placeholder='Enter Your Message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
        <ToastContainer/>
      </div>
      
    </div>
  )
}

export default Contact
