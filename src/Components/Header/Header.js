import React from 'react'
import ColorText from '../ColorText/ColorText'
import './Header.css'
import Particle from '../Particles/Particles'

const Header = () => {
    return (
        <div className='main' id='scroll-to-top'>
        <div className='header'>
            <Particle/>
            <ColorText className='colorText'/>
        </div>
        
  </div>
    );
};

export default Header;
