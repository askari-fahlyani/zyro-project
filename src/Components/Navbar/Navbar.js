import React from 'react';
import './navbar.css'
import {useState} from "react";

function Navbar(props) {
    const [navbar,setNavbar]=useState(false)

    const changeBackground=()=>{
        if (window.scrollY>=80){
            setNavbar(true)
        }else {
            setNavbar(false)
        }
        console.log(navbar)
    }

window.addEventListener('scroll',changeBackground)

    return (

        <div className={`navbarContainer ${navbar?'scroll':''}`}>
            <div className='leftItem'>
                <a className='leftItemLink' href="#">Brooke</a>
            </div>
            <div className='rightItems'>
                <a href="#" className="rightItemLink">About Me</a>
                <a href="#" className="rightItemLink">Experience</a>
                <a href="#" className="rightItemLink">Testimonials</a>
                <a href="#" className="rightItemLink">Contacts</a>
            </div>
        </div>
    );
}

export default Navbar;