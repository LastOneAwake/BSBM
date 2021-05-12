import React from 'react';
import './splash.scss';
import logo from '../assets/logo.png';

export default function Splash() {

    return (
        <div id='splash' className='fullPageSection centeredFlex'>
            <div id='splashGradientBG'/>
            <img id='splashLogo' src={logo} alt='Body Sculpting By Mito logo' />
        </div>

    )

}