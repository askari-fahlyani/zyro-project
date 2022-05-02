import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        <div className='footerContainer'>
            <div className="leftSide">
                <h1>Brooke R.</h1>
                <p>Powered by Zyro.com</p>
            </div>
            <div className="rightSide">
               <ul className="footerSocialMedia">
                   <li>― SOCIALS</li>
                   <li><a href="#">Linkedin</a></li>
                   <li><a href="#">Facebook</a></li>
                   <li><a href="#">Twitter</a></li>
               </ul>
                <ul className="footerContact">
                    <li style={{marginBottom:'30px'}}>― CONTACTS</li>
                    <li><a href="#">your@gmail.com</a></li>
                    <li><a href="#">123-123-1234</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;