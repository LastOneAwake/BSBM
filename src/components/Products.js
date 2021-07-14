import React from 'react';
import './products.scss';
import bpWaterBottles from '../assets/images/icons/blackPinkWaterBottles.jpg';
import greyWaterBottle from '../assets/images/icons/greyWaterBottle.jpg';
import greenWaterBottle from '../assets/images/icons/greenWaterBottle.jpg';
import cuteWaterBottles from '../assets/images/icons/cuteWaterBottles.jpg';




const prodsAvailable = [
    {
        product: 'Water Bottles',
        description: 'Water bottles specifically designed to promote hydration and general health!',
        imgs: [bpWaterBottles, greenWaterBottle, greyWaterBottle, cuteWaterBottles]
    },
]

const productsComingSoon = [
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
                <div className='productsSubHeader'>Now Available At Our SoDo Location!</div>
                <div id='productsAvailable'>
                    {prodsAvailable.map(product => {
                        return (
                            <div className='availableProduct'>
                                <div className='availableProductName'>{product.product}</div>
                                <div className='availableProductDescription'>{product.description}</div>
                                <div className='productImgs'>
                                    {product.imgs.map(img => {
                                        return (<img
                                            src={img}
                                            alt='water bottles now available at Body Sculpting by Mito'
                                        />);
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id='comingSoon'>
                    <div className='productsSubHeader'>A Preview of Products Coming Soon!</div>
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