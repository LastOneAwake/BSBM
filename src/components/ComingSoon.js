import React from 'react';
import './comingSoon.scss';

const servicesComingSoon = [
    {
        service: 'Botox',
        description: 'Botox injections: Botox is a protein made from Botulinum toxin. This is the same toxin that causes botulism. As a cosmetic treatment, Botox injections can reduce the appearance of skin wrinkles. As a treatment for various health issues, including eyelid spasms, excessive sweating, some bladder disorders, and migraine.',
    },
    {
        service: 'Fillers',
        description: 'Hyaluronic acid is a naturally occurring substance that is already found in your skin. It helps keep skin plump and hydrated. With the aging process the skin lost the subcutaneous fat that supports our skin, causes skin sags. That’s why Dermal fillers are very popular in the cosmetics world.',
        more: 'Dermal fillers are hydraulic acid or gel-like substances that are injected beneath the skin to restore lost volume, smooth lines and soften creases that are common in the cheeks, lips, and around the mouth 👄 Hyaluronic acid can also be injected into the back of the hands to help add fullness and volume for a smoother, fuller appearance.',

    },
    {
        service: 'Monthly Subscription',
        description: 'We are developing a subscription service to better suit our clients needs!',
    },
]

const productsComingSoon = [
    {
        product: 'Water Bottles',
        description: 'Water bottles specifically designed to promote hydration and general health!',
    },
    {
        product: 'Fajas',
        description: 'Fajas to helep strength your posture and lower back muscles, our fajas also help to reduce appetite and will help in burning fat through a thermogenic effect on the abdomen.',

    },

]




export default function ComingSoon() {
    return (
        <div id='comingSoon' className=' flex1'>
            <div id='comingSoonHeader' className='centeredFlex' > We Will Soon Offer...</div>
            <div id='comingSoonBody'>
                <div className='comingSoonSubHeader'>Services Coming Soon!</div>
                {servicesComingSoon.map(service => {
                    return (
                        <div className='comingSoonService'>
                            <div className='comingSoonServiceName'>{service.service}</div>
                            <div className='comingSoonServiceDescription'>{service.description}</div>
                        </div>
                    );
                })}
                <div className='comingSoonSubHeader'>Products Available Soon!</div>
                {productsComingSoon.map(product => {
                    return (
                        <div className='comingSoonService'>
                            <div className='comingSoonServiceName'>{product.product}</div>
                            <div className='comingSoonServiceDescription'>{product.description}</div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}