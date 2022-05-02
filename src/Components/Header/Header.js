import React from 'react';
import './header.css'
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

function Header(props) {
    return (
        <div className="HNContainer">

            <div className='headerContainer'>
                <div className='leftHeader'>
                    <h1 className='headerTitle'>Hi, I am Brooke, a project manager</h1>
                    <Button title='Email me'/>
                    <div className="socialMediaContainer">
                        <a href="#" className="socialMedia">Linkedin </a>
                        <span className='space'>/</span>
                        <a href="#" className="socialMedia">Facebook </a>
                        <span className='space'>/</span>
                        <a href="#" className="socialMedia">Twitter</a>
                    </div>
                </div>
                <div className='rightHeader'>

                </div>

            </div>
        </div>




    );
}

export default Header;