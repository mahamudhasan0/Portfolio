import React from 'react'
import Header from './Components/Header/Header'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage">
            <Header/>
            <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://github.com/mahamudhasan0" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGoogle} className="icon yt"/>
                    </Link>
                </div>
        </div>
    )
}

export default Home
