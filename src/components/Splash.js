import React from 'react';
import './splash.scss';
import logo from '../assets/images/icons/logoCutText.png';

export default function Splash() {

    return (
        <div id='splash' className='fullPageSection centeredFlex sectionFadeIn'>

            <div id='splashLogoContainer'>
                <img id='splashLogo' src={logo} alt='Body Sculpting By Mito logo' />
            </div>
            <p id='introBlock'>
                We specialize in non-surgical, FDA
                approved treatments for permanent fat
                reduction. Our goal is to provide our clients with the best results.
            </p>
        </div>

    )

}