import React from 'react';
import './about.scss';

export default function About({mobileView}) {

    return (
        <div id='about' className='centeredFlex'>
            <div id='aboutTopText' className='aboutText '>
                <div className='aboutHeaderBlock centeredFlex'>Who?</div>
                <p className='centeredFlex'>
                    I am a registered nurse, certified in Body Sculpting, Body Contouring, and Wooden Therapy.
                    I use my background and expertise to develop advanced wellness treatments to provide all clients with noticeable, same-day results.
                    Body sculpting has enabled me to put my passion to work helping people achieve their goals.
                    Each of my clients is unique and I love getting to know them and their needs, developing a
                    treatment plan that is unique to them, and helping them to look their best!
                </p>
            </div>
            <div id='aboutBottomText' className='aboutText '>
            {mobileView && <div className='aboutHeaderBlock centeredFlex'>What and How?</div> }
                <p className='centeredFlex'>
                    My goal is always to provide my clients with the results they need.
                    This is accomplished by combining various services, including Ultrasonic and Laser Lipo Cavitation, to liquify fat cells. 
                    Then letting the body's lymphatic system do what it does best and remove these melted, dead, fat cells.
                    As necessary, we have various methods of breaking down tissue as to provide you with noticeably more dramatic results.
                    
                    We specialize in CoolSculpting, SculpSure, HIFU/Ultherapy, Wooden Therapy, and Laser Lipo Cavitation.
                    I only offer treatments that are non-surgical and FDA Approved for permanent fat reduction by way of freezing and killing visible fat cells.
                </p>
                {!mobileView && <div className='aboutHeaderBlock centeredFlex'>What and How?</div> }
            </div>
        </div>

    )

}






