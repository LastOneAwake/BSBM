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
                reduction.
                {/* These treatments involve killing and/or liquifying visible fat cells via freezing, laser, or high frequency sound waves. */}
                {/* The body's lymphatic system then kicks into gear to remove these broken-down fat cells, giving you a dramatically slimmer appearance.  */}
                <br/>Our goal is to provide our
                clients with the best results.
            </p>
        </div>

    )

}