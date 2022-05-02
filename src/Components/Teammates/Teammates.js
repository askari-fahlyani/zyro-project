import React from 'react';
import './teammates.css'
import Title from "../Title/Title";

function Teammates(props) {
    return (
        <div className='teammatesContainer'>
            <h1>What they say:</h1>
            <div className='teammate'>
                <img src="../Images/pic5.png"  className="teammateImg"/>
                <div className="teammateComment">
                    <Title title='JEREMY WATSON'/>
                    <p>We've worked on many projects together with Brooke at Stilltech, and she's a true asset to any team. She's a team player, but think on her feet and never settles for a no. Her ambition and passion for what she does is uncanny, and it's been a pleasure to see her progress and grow more confident in her professional role over time. I thoroughly recommend her for any leadership or project management roles. </p>
                </div>
            </div>
            <div className='teammate'>
                <img src="../Images/pic6.png"  className="teammateImg"/>
                <div className="teammateComment">
                    <Title title='LIANNE HAYES'/>
                    <p>Brooke was my manager at Yeall & Co and taught me everything I know about project management. As an intern, she never treated me differently from other team members – instead, she whole-heartedly embraced my ideas and input. She helped me to think about the bigger picture and implement strategy into my everyday work, but also showed me how to bring people together and unite them for a single goal.  </p>
                </div>
            </div>
        </div>
    );
}

export default Teammates;