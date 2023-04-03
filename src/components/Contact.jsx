import React from 'react'
import "././styles/contact.css";


const Contact = () => {
  return (
    <div className='contact'>
        <form className="form">
            <h3>CONTACT US</h3>
            <p type="Name:"><input placeholder="Your Name.." required></input></p>
            <p type="Email:"><input placeholder="Your Email Address.." required></input></p>
            <p type="Message:"><input placeholder="Tell Us something.."></input></p>
            <button type='submit'>Send Message</button>
            <br/>
            <br/>
            <br/>
            <div className='extended'>
                <span className="fa fa-phone">Tel No. +254-1-1023-567</span><br/>
                <span className="fa fa-envelope-o">Our Email: futurepioneers@gmail.com</span>
            </div>
        </form>
    </div>
  )
}

export default Contact