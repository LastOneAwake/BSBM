import React from 'react';
import './about.scss';

export default function About({ mobileView }) {

    return (
        <div id='about' className='centeredFlex pageHeader'>
            <div id='aboutTopText' className='aboutText '>
                <div className='aboutHeaderBlock'>About Us</div>
                <p className=''>
                Body by Mito was born out of my dedication and passion to offer advanced wellness treatments that give you noticeable, same day results.
                    I am a Registered Nurse certified in Body Sculpting, Body Contouring, and Wood Therapy. 
                    I recognize each person is unique and has different goals. I love getting to know my clients while developing
                    personalized treatment plans that help them look and feel their best!
                </p>
            </div>
            {/* <div id='aboutBottomText' className='aboutText '>
                <div className='aboutHeaderBlock'>How We Do it</div>
                <p className='firstBlock'>
                    We specialize in non-surgical, FDA
                    approved treatments for permanent fat
                    reduction, including:
                </p>
                <ul>
                    <li>CoolSculpting</li>
                    <li>SculpSure</li>
                    <li>HIFU aka Ultherapy</li>
                    <li>Laser Lipo Cavitation</li>
                    <li>Wood Therapy</li>
                </ul>
                <p>
                    These treatments involve killing and/or liquifying visible fat cells via freezing, laser, or high frequency sound waves.
                    The body's lymphatic system then kicks into gear to remove these broken-down fat cells, giving you a dramatically slimmer appearance. Our goal is to provide our
                    clients with the best results.
                </p>
            </div> */}
        </div>

    )

}






        <p className='firstBlock'>
                    We specialize in non-surgical, FDA
                    approved treatments for permanent fat
                    reduction.
                    <br />
                    These treatments involve killing and/or liquifying visible fat cells via freezing, laser, or high frequency sound waves.
                    <br />
                    The body's lymphatic system then kicks into gear to remove these broken-down fat cells, giving you a dramatically slimmer appearance. Our goal is to provide our
                    clients with the best results.
                </p>