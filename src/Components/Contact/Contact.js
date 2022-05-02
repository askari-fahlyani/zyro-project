import React from 'react';
import './contact.css'
import Button from "../Button/Button";

function Contact(props) {
    return (
        <div className='contactContainer'>
            <div className='contactForm'>
                <h1>Let's talk</h1>
                <form action="#" className="form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder="your name"/>
                    <label htmlFor="email">Your email*</label>
                    <input type="text" id='email' placeholder="your email address"/>
                    <label htmlFor="message">Message*</label>
                    <textarea name="" id="message" cols="30" rows="6" placeholder="Enter your message"></textarea>
                    <Button title='Submit'/>
                </form>
            </div>
            <div className='contactImg'>

            </div>
        </div>
    );
}

export default Contact;