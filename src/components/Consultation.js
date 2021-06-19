import React from 'react';
import './consultation.scss';
import fbIcon from '../assets/images/icons/facebookIcon.svg';
import instaIcon from '../assets/images/icons/instagramIcon.png';
export default function Consultation() {


    return (
        <div id='consultation' className='centeredFlex'>
            <div id='consultationHeader' className='sectionHeader'>
                Contact Us
            </div>

            <div id='contactInfo' className=''>

                <div id="sodo" className='contactSection'>We're Located In SoDo! </div>
                <div className='contactSection'>
                    <div className='contactType'>Address:</div>
                    <div className='contactDetails'>
                        30 West Grant
                        <br />Suite 129
                        <br />Orlando, FL 32806
                    </div>

                </div>
                <div id='phoneSection' className='contactSection'>
                    <div className='contactType'>Phone</div>
                    <div className='contactDetails'
                        onClick={() => {
                            window.open("tel:+14076765938");
                        }}
                    >
                        (407)-676-5938
                    </div>
                </div>
                <div id='emailSection' className='contactSection'>
                    <div className='contactType'>Email</div>
                    <div className='contactDetails' onClick={() => {
                        window.open('mailto:BodyByMito@yahoo.com?subject=`Body%20By%20Mito%20Inqury`')
                    }}>
                        {/* BodyByMito@yahoo.com */}
                        (Click Here to Email)
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
                        window.open('https://www.instagram.com/body_sculptingbymito/?hl=en', '_blank');
                    }} />
            </div>
        </div>


    )

}