import React from 'react'
import ColorText from '../ColorText/ColorText'
import './Header.css'
import ParticlesJs from '../Particles/Particles'
import image from '../../Images/mahamudpic.jpg'

const Header = () => {
    return (
        <div className='main' id='scroll-to-top'>
        <div className='header'>
            <ParticlesJs/>
           <div>
           <img 
                src={image}
                alt=''
                className='overlayImage'
            />
           </div>
            <ColorText className='colorText'/>
        </div>
        
  </div>
    );
};

export default Header;
