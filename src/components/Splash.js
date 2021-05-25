import React from 'react';
import './splash.scss';
import logo from '../assets/images/icons/logoCutText.png';

export default function Splash() {

    return (
        <div id='splash' className='fullPageSection centeredFlex'>

            <img id='splashLogo' src={logo} alt='Body Sculpting By Mito logo' />
        </div>

    )

}