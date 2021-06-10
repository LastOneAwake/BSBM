import React, { useState } from 'react';
import './consultation.scss';
import fbIcon from '../assets/images/icons/facebookIcon.svg';
import instaIcon from '../assets/images/icons/instagramIcon.png';
export default function Consultation() {
    const [emailVal, updateEmailVal] = useState('');
    const [nameVal, updateNameVal] = useState('');
    const [numberVal, updateNumberVal] = useState('');
    const [consultationSelected, updateConsultationSelected] = useState(true);




    return (
        <div id='consultation' className='centeredFlex'>
            <div id='consultationHeader' className='sectionHeader'>
                Contact Us
            </div>

            <div id='contactInfo' className=''>
                <div className='contactSection'>
                    <div className='contactType'>Location</div>
                    <div className='contactDetails'>
                        30 West Grant
                        <br />Suite 129
                        <br />Orlando, FL 32806
                         </div>

                </div>
                <div className='contactSection'>
                    <div className='contactType'>Phone</div>
                    <div className='contactDetails'>(321) 945-1158</div>
                </div>
                <div className='contactSection'>
                    <div className='contactType'>Email</div>
                    <div className='contactDetails'>test@test.com</div>
                </div>
            </div>
            <div id='socialMedia' className=''>
                <img src={fbIcon} />
                <img src={instaIcon} />
            </div>
        </div>


    )

}