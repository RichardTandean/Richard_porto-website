import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from './Typewriter';

const LandingPage: React.FC = () => {
  return (
    <div className='container home-container'>
        <div className='d-flex home-row'>
            <div className='text-home'>
                <h1 id='hello' className='mb-1 text-md-left text first-text'>
                    <Typewriter text="Hii, I'm Richard Tandean" />
                </h1>
                <h2 id='hello2' className='mb-4 text-md-left'>
                    <Typewriter text="EEngineering Student" initialDelay={1400} />
                </h2>
                <h4 id='hello3' className='text-md-left'>
                    <Typewriter text="3rrd year student at Universitas Multimedia Nusantara majoring in
                    Computer Engineering. I have a strong interest and passion in various
                    fields such as Cyber Security, Front End Development, and Cloud Computing." initialDelay={2800} typingSpeed={25}/>
                </h4>
                <div className='d-flex btn-div'>
                    <a type="button" className='d-flex align-items-center justify-content-center button-home' href="https://www.linkedin.com/in/richardtandean/" target="_blank" rel="noopener noreferrer">
                        My LinkedIn
                    </a>
                    <a className='d-flex align-items-center justify-content-center button-home2' href="#Contact">
                        Contact Me!
                    </a>
                </div>
            </div>
            <div className='richard d-flex'>
                <img src="/Image/Richard.png" alt="richard" id="richard" className="img-fluid"/>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;
