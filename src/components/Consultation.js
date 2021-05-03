import React, { useState } from 'react';
import './consultation.scss';

export default function Consultation() {
    const [emailVal, updateEmailVal] = useState('');
    const [naemVal, updateNameVal] = useState('');
    const [numberVal, updateNumberVal] = useState('');

    return (
        <div id='consultation' className='fullPageSection centeredFlex'>
            <div id='consultationText' className=''>
                <div id='consultationHeader' className='sectionHeader flex1'>Schedule a free consultation</div>
                <div id='consultationImg' className='flex1'></div>
            </div>
            <div id='formholder' className='flex1 centeredFlex'>

                <form className='centeredFlex'>
                    <span id='serviceSelectionHeader'>Service you're intrested in?</span>
                    <div id='serviceHolder' className='centeredFlex'>
                        <div className='formService'>HIFU/Ultherapy</div>
                        <div className='formService'>EMSculpt</div>
                        <div className='formService'>General Inqury</div>
                    </div>
                    <div className='formInput centeredFlex'><label>Name</label><input type='text'></input></div>
                    <div className='formInput centeredFlex'><label>PhoneNumber</label><input type='text'></input></div>
                    <div className='formInput centeredFlex'><label>Email</label><input type='number'></input></div>
                    <button >Send</button>
                </form>
            </div>
        </div>

    )

}