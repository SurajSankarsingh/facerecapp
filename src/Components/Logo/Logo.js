import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br3 shadow-1" 
            options={{ max : 40, perspective: 290, scale: 1.20, speed: 500,      easing: "cubic-bezier(.3,.9,.9,.5)"  }} 
            style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingTop: '22px'}} alt='logo' src={face}/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;