import React, { useState } from 'react';
import './consultation.scss';

export default function Consultation() {
    const [emailVal, updateEmailVal] = useState('');
    const [nameVal, updateNameVal] = useState('');
    const [numberVal, updateNumberVal] = useState('');
    const [consultationSelected, updateConsultationSelected] = useState(true);




    return (
        <div id='consultation' className='centeredFlex'>
            <div id='consultationText' className=''>
                <div id='consultationHeader' className='sectionHeader'>Schedule a consultation now!</div>
                {/* <div id='consultationImg' className='flex1'></div> */}
            </div>
            <div id='formholder' className='centeredFlex'>
                <form className=''>
                    <div id='serviceHolder' className='centeredFlex'>
                        <div
                            className={'formService' + (consultationSelected ? ' selected' : '')}
                            onClick={() => {
                                updateConsultationSelected(true);
                            }}
                        >Consultation</div>
                        <div
                            className={'formService' + (!consultationSelected ? ' selected' : '')}
                            onClick={() => {
                                updateConsultationSelected(false);
                            }}
                        >General Inqury</div>
                    </div>
                    <div className='formInput centeredFlex'>
                        <label>Name</label>
                        <input
                            type='text'
                            value={nameVal}
                            onChange={e => {
                                updateNameVal(e.target.value);
                            }}
                        /></div>
                    <div className='formInput centeredFlex'>
                        <label>Phone Number</label>
                        <input
                            type='text'
                            value={numberVal}
                            onChange={e => {
                                updateNumberVal(e.target.value);
                            }}
                        />
                    </div>
                    <div className='formInput centeredFlex'>
                        <label>Email</label>
                        <input
                            type='text'
                            value={emailVal}
                            onChange={e => {
                                updateEmailVal(e.target.value);
                            }}
                        />
                    </div>
                    <button >Send</button>
                </form>
            </div>
        </div>

    )

}