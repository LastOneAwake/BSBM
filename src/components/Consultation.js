import React from 'react';
import './consultation.scss';
import './about.scss';
import fbIcon from '../assets/images/icons/facebookIcon.svg';
import instaIcon from '../assets/images/icons/instagramIcon.png';
export default function Consultation() {


    return (
        <div id='consultation' className='centeredFlex sectionFadeIn'>
            <div id='consultationHeader' className='sectionHeader'>
                About Us
            </div>
            <div id='aboutTopText' className='aboutText '>
                {/* <div className='aboutHeaderBlock'>About Us</div> */}
                <p className=''>
                    Body by Mito was born out of my dedication and passion to offer advanced wellness treatments that give you noticeable, same day results.
                    I am a Registered Nurse certified in Body Sculpting, Body Contouring, and Wood Therapy.
                    I recognize each person is unique and has different goals. I love getting to know my clients while developing
                    personalized treatment plans that help them look and feel their best!
                </p>
            </div>
            <div id='contactInfo' className=''>

                <div id="sodo" className='contactSection'>We're Located In SoDo! </div>
                <div className='contactSection'>
                    <div className='contactType'>Visit Us:</div>
                    <div className='contactDetails'>
                        30 West Grant
                        <br />Suite 129
                        <br />Orlando, FL 32806
                    </div>

                </div>
                <div id='phoneSection' className='contactSection'>
                    <div className='contactType'>Call Us:</div>
                    <div className='contactDetails'
                        onClick={() => {
                            window.open("tel:+14076765938");
                        }}
                    >
                        (407)-676-5938
                    </div>
                </div>
                <div id='emailSection' className='contactSection'>
                    {/* <div className='contactType'>Email Us:</div> */}
                    <div className='contactDetails' onClick={() => {
                        window.open('mailto:BodyByMito@yahoo.com?subject=`Body%20By%20Mito%20Inqury`')
                    }}>
                        {/* BodyByMito@yahoo.com */}
                        Click Here to Email Us
                    </div>
                </div>
            </div>
            <div id='socialMedia' className=''>
                <img src={fbIcon} alt='facebook link'
                    onClick={() => {
                        window.open('https://www.facebook.com/bodysculptingbymito/', '_blank');
                    }} />
                <img src={instaIcon} alt='instagram link'
                    onClick={() => {
                        window.open('https://www.instagram.com/bodysculpting.bymito', '_blank');
                    }} />
            </div>
        </div>


    )

}