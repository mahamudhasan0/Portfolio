import React from 'react';
import Item from './Item'
import phone from '../../Images/phone.svg';
import email from '../../Images/email.svg';
import location from '../../Images/location.svg';
import Tittle from '../Tittle/Tittle';

const Contact = () => {
    return (
        <div>
        <div className="title">
            <Tittle title={'About Me'} span={'About Me'} />
        </div>
        <div className="Contact">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468468.405440254!2d89.16255896836942!3d23.463731689704044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe55c9b76dc93f%3A0xcab06b14c22acb00!2sMagura%20District!5e0!3m2!1sen!2sbd!4v1619908628359!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowFullScreen=""  title="This is a unique title" loading="lazy"></iframe>
            </div>
            <div className="contact-section">
                <Item icon={phone} text1={'01316188019'} text2={'01786828485'} title={'Phone'}/>
                <Item icon={email} text1={'mahmudhasan960458@gmail.com'}  title={'Email'}/>
                <Item icon={location} text1={'Magura,Khulna'} text2={'Dhaka'} title={'Address'}/>
            </div>
        </div>
    </div>
    );
};

export default Contact;