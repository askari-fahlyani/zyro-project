import React from 'react';
import './resume.css'
import Title from "../Title/Title";

function Resume(props) {
    return (
        <div className='resumeContainer'>
            <div className='resumeTopSection'>
                <div className='resumeTopSectionLeft'>
                    <Title title='WORK EXPERIENCE'/>
                </div>
                <div className='resumeTopSectionRight'>
                    <div className='experience'>
                        <h1>Senior project manager</h1>
                        <h4>Stilltech  / Aug 2018 - Present</h4>
                        <p>I’ve been central to delivering two extensive projects while working at Stilltech, both in the augmented reality space.</p>
                    </div>
                    <div className='experience'>
                        <h1>Project manager</h1>
                        <h4>Yeall & Co / Aug 2016 - Aug 2018</h4>
                        <p>I was lucky to learn the ropes at Yeall Co., where I worked with an international team on projects including edible smartphone cases and human cloning. </p>
                    </div>
                </div>
            </div>
            <div className='resumeMiddleSection'>
                <div className='resumeMiddleSectionLeft'>
                    <Title title='EDUCATION'/>
                </div>
                <div className="resumeMiddleSectionRight">
                    <div className='education'>
                        <h1>Columbia University</h1>
                        <h4>Master's degree, International Business / 2016 - 2018</h4>

                    </div>
                    <div className='education'>
                        <h1>Stanford University</h1>
                        <h4>Bachelor’s degree, Business Administration / 2012 - 2016</h4>

                    </div>
                </div>

            </div>
            <div className='resumeBottomSection'>
                <div className='resumeBottomSectionLeft'>
                    <Title title=' COURSES'/>
                </div>
                <div className="resumeBottomSectionRight">
                    <div className='Courses'>
                        <h1>Agile methodology</h1>
                        <h4>Spaetzle Institute / 2016</h4>

                    </div>
                    <div className='Courses'>
                        <h1>Project management methodologies</h1>
                        <h4>Knödl Labs / 2017</h4>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;