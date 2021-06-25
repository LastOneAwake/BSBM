import React from 'react';
import './products.scss';

const productsComingSoon = [
    {
        product: 'Water Bottles',
        description: 'Water bottles specifically designed to promote hydration and general health!',
    },
    {
        product: 'Fajas',
        // description: 'Fajas to help strength your posture and lower back muscles, our fajas also help to reduce appetite and will help in burning fat through a thermogenic effect on the abdomen.',
        description: 'Our fajas help strengthen your posture and lower back muscles. They also help to reduce appetite and burn fat through a thermogenic effect on the abdomen.',

    },

]

export default function ComingSoon() {

    return (
        <div id='products' className='fullPageSection sectionFadeIn'>
            <div id='productsHeader' className='pageHeader'>
                Shop Mito
            </div>
            <div id='productsBody'>
            <div id='comingSoon'>
                <div className='comingSoonSubHeader'>A Preview of Products Coming Soon!</div>
                {productsComingSoon.map(product => {
                    return (
                        <div className='comingSoonProduct'>
                            <div className='comingSoonProductName'>{product.product}</div>
                            <div className='comingSoonProductDescription'>{product.description}</div>
                        </div>
                    );
                })}
            </div>
            </div>

        </div>
    );
}