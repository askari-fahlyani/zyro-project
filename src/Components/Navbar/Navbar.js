import React from 'react';
import './navbar.css'

function Navbar(props) {
    return (
        <div className={`navbarContainer`}>
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