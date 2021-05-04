import React, { useState } from 'react';
import './consultation.scss';

export default function Consultation() {
    const [emailVal, updateEmailVal] = useState('');
    const [nameVal, updateNameVal] = useState('');
    const [numberVal, updateNumberVal] = useState('');
    const [hifuSelected, updateHifuSelected] = useState(false);
    const [emsSelected, updateEMSSelected] = useState(false);
    const [genSelected, updateGenSelected] = useState(false);



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
                        <div 
                        className={'formService' + (hifuSelected ? ' selected' : '')}
                        onClick={()=>{
                            updateHifuSelected(!hifuSelected);
                        }}
                        >HIFU/Ultherapy</div>
                        <div 
                        className={'formService' + (emsSelected ? ' selected' : '')}
                        onClick={()=>{
                            updateEMSSelected(!emsSelected);
                        }}
                        >EMSculpt</div>
                        <div 
                        className={'formService' + (genSelected ? ' selected' : '')}
                        onClick={()=>{
                            updateGenSelected(!genSelected);
                        }}
                        >General Inqury</div>
                    </div>
                    <div className='formInput centeredFlex'>
                        <label>Name</label>
                        <input 
                        type='text' 
                        value={nameVal}
                        onChange={e=>{
                            updateNameVal(e.target.value);
                        }}
                        /></div>
                    <div className='formInput centeredFlex'>
                        <label>PhoneNumber</label>
                        <input 
                        type='text'
                        value={numberVal}
                        onChange={e=>{
                            updateNumberVal(e.target.value);
                        }}
                        />
                    </div>
                    <div className='formInput centeredFlex'>
                        <label>Email</label>
                        <input 
                        type='text' 
                        value={emailVal}
                        onChange={e=>{
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