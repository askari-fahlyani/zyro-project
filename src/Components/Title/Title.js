import React from 'react';
import './title.css'

function Title(props) {
    return (
        <h3 className='generalTitle'>{`_ ${props.title}`}</h3>
    );
}

export default Title;