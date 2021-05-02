import React from 'react';
import './splash.scss';
import logo from '../assets/headerLogo.png';

export default function Splash() {

    return (
        <div id='splash' className='fullPageSection centeredFlex'>
            <div id='splashGradientBG'/>
            <div id='splashShape' className='bgShape'>
                <img src={logo} alt='Body Sculpting By Mito logo' />
            </div>
        </div>

    )

}