import React from 'react';
import style from './nav.scss';

export default function Nav({scrollPos}){

const navClasses = scrollPos === 0 ? 'top' : '';
    return(
        <div id='nav'>
            <div className='navItem centeredFlex'>Consultation</div>
            <div className='navItem centeredFlex'>About</div>
            <div className='navItem centeredFlex'>EMSculpt</div>
            <div className='navItem centeredFlex'>HIFU/Ultherapy</div>
            <div className='navItem centeredFlex'>Services</div>
        </div>
    )
}