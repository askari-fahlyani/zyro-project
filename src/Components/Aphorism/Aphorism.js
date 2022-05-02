import React from 'react';
import './aphorism.css'

function Aphorism(props) {
    return (
        <div className='aphorismContainer'>
            <p className="aphorism">“Whenever I am in a difficult situation where there seems to be no way out, I think about all the times I have been in such situations and say to myself: I did it before, so I can do it again.”</p>
            <span className="writer">- Idowu Koyenikan</span>
        </div>
    );
}

export default Aphorism;