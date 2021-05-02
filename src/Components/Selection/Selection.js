import React from 'react';
import image from '../../Images/mahamudpic.jpg'

const Selection = () => {
    return (
        <div className="Image">
        <div className="img">
            <img src={image} alt=""/>
        </div>
        <div className="info">
        <h4>I AM<span> MAHAMUD HASAN</span></h4>
        <p className="text">
        I'm a Front-End Developer and I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </p>
        <div className="details">
            <div className="left-section">
                <p>Full Name</p>
                <p>Age</p>
                <p>Nationality</p>
                <p>Languages</p>
                <p>Address</p>
                
            </div>
            <div className="right-section">
                <p>: Mahamud Hasan Mithoon</p>
                <p>: 24</p>
                <p>: Bangladeshi</p>
                <p>: Bangla,English,Hindi</p>
                <p>: Magura,Khulna,Dhaka</p>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Selection;