import React from 'react';
import './nav.scss';

export default function Nav({ scrollPos }) {

    const navClasses = scrollPos === 0 ? 'top' : '';
    return (
        <div id='nav' className={navClasses}>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Consultation</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>About</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>EMSculpt</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>HIFU/Ultherapy</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Services</span>
            </div>
        </div>
    )
}