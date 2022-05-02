import React from 'react';
import './button.css'

function Button(props) {
    return (
        <div className='buttonContainer'>
            <button className='button'>{props.title}</button>
        </div>
    );
}

export default Button;