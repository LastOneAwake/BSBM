import React from 'react';
import './nav.scss';

export default function Nav({ scrollPos }) {

    const navClasses = scrollPos === 0 ? 'top' : '';
    console.log(scrollPos);
    return (
        <div id='nav' className={navClasses}>
            {/* <div className='navItem centeredFlex'>
                <span className='navTextHolder'>About</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Services</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Specials</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Reviews</span>
            </div>
            <div className='navItem centeredFlex'>
                <span className='navTextHolder'>Contact</span>
            </div> */}
        </div>
    )
}