import React from 'react';
import './mainsection.css'
import Title from "../Title/Title";

function MainSection(props) {
    return (
        <div className='mainSection'>
            <div className='mainSectionTop'>
                <div className="mainSectionTopLeft">
                    <Title title="MY BACKGROUND"/>
                    <p className='description'>I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and philosophy. I have excelled in a number of project management roles in diverse industries, and believe that my number one asset is my ability to adapt to any challenge that is thrown my way.</p>

                </div>
                <div className="mainSectionTopRight">
                    <Title style={{paddingLeft:30}} title="SKILLS"/>
                    <ul className='skills'>
                        <li className='skill'>Leadership</li>
                        <li className='skill'>Communication</li>
                        <li className='skill'>Critical thinking</li>
                        <li className='skill'>Risk management</li>
                        <li className='skill'>Cost management</li>
                    </ul>
                </div>
            </div>
            <div className='mainSectionBottom'>
                <div className='imageLeft'></div>
                <div className='imageMiddle'></div>
                <div className='imageRight'></div>
            </div>

        </div>
    )
}
export default MainSection