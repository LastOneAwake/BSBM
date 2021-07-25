import React, { useState } from 'react';
import './products.scss';
import bpWaterBottles from '../assets/images/icons/blackPinkWaterBottles.jpg';
// import greyWaterBottle from '../assets/images/icons/greyWaterBottle.jpg';
// import greenWaterBottle from '../assets/images/icons/greenWaterBottle.jpg';
import cuteWaterBottles from '../assets/images/icons/cuteWaterBottles.jpg';
import lipoInjectionIcon from '../assets/images/icons/lipoLab_supplied.png';
import lipoImg2 from '../assets/images/icons/lipoImg_2.jpg';
import lipoImg3 from '../assets/images/icons/lipoImg_3.jpg';
import lipoImg_treatment from '../assets/images/icons/treatmentImg.png';




// import IMG_5959 from '../assets/images/waterBottles/IMG_5959.jpg';
// import IMG_5960 from '../assets/images/waterBottles/IMG_5960.jpg';
// import IMG_5961 from '../assets/images/waterBottles/IMG_5961.jpg';
// import IMG_5962 from '../assets/images/waterBottles/IMG_5962.jpg';
import blackWithSize from '../assets/images/waterBottles/IMG_5964.jpg';
// import IMG_5966 from '../assets/images/waterBottles/IMG_5966.jpg';
// import IMG_5969 from '../assets/images/waterBottles/IMG_5969.jpg';
// import IMG_5994 from '../assets/images/waterBottles/IMG_5994.jpg';
import fourSquare from '../assets/images/waterBottles/IMG_5997.jpg';
import pinkFrostedHeldUp from '../assets/images/waterBottles/IMG_6001.jpg';
// import IMG_6003 from '../assets/images/waterBottles/IMG_6003.jpg';
// import IMG_6005 from '../assets/images/waterBottles/IMG_6005.jpg';
// import IMG_6006 from '../assets/images/waterBottles/IMG_6006.jpg';
// import IMG_6024 from '../assets/images/waterBottles/IMG_6024.jpg';
// import IMG_6025 from '../assets/images/waterBottles/IMG_6025.jpg';
import blackGreyTempSHowing from '../assets/images/waterBottles/IMG_6026.jpg';
// import IMG_6027 from '../assets/images/waterBottles/IMG_6027.jpg';
import colorTemps from '../assets/images/waterBottles/IMG_6028.jpg';
// import IMG_6029 from '../assets/images/waterBottles/IMG_6029.jpg';



const wbImages = [
    blackWithSize,
    fourSquare,
    pinkFrostedHeldUp,
    cuteWaterBottles,
    blackGreyTempSHowing,
    colorTemps,
]


const prodsAvailable = [
    {
        product: 'Lipo Lab Injections',
        moreID: 'lipoLabProduct',
        icon: lipoInjectionIcon,
        description: <div>
            <p>Lipo Lab is a highly effective fat-melting injectable based on Phosphatidyl Choline (PPC).
                Unlike many other fat-burning injections that only shrink the size of fat cells, this solution permanently dissolves them.
                It offers an excellent alternative for the reduction and elimination of fat deposits on sites that are slow to respond to physical exercise and surgical procedures (e.g. double chin, abdomen fat).
                The treatment is painless and incredibly simple.
            </p>
        </div>,
        more: (<div id='lipoMoreSection'>
            <div id='lipoMoreImgs' className='moreImgHolder'>
                <img className='moreImg' src={lipoImg2} alt='Pack of Lipo Lab Injection Solution' />
                <img className='moreImg' id='factsLabel' src={lipoImg3} alt='Lipo Lab Injection Information' />
            </div>
            <div className='moreText'>
                <div className='productSubheader'>How to use</div>
                <p>
                    In case of abdomen or waist, inject 0.25~0.3ml on a spot and move to a centimeter to 2 centimeter distant.
                    You are recommended to repeat this treatment 4~5 times at 7~10 day’s interval.
                    In case of other parts such as double chin, armpit, upper arm and thigh, you are required to adjust injection quantity according to the obesity degree of the part to be injected. 0.05-0.1ml
                </p>
                <img className='moreImg' id='treatmentAreas' src={lipoImg_treatment} alt='Lipo Lab Treatment Areas' />

            </div>
        </div>)
    },

    {
        product: 'Water Bottles',
        description: 'Water bottles specifically designed to promote hydration and general health!',
        icon: bpWaterBottles,
        moreID: 'waterBottlesMore',
        more: (
            <div id='waterbottleMoreText' className='moreText'>
                <div className='productSubheader'>We Carry Various Styles!</div>
                <div id='moreWBHolder'>
                    {wbImages.map((img, i) => {
                        return (
                            <img className='moreImg waterbottleImg' src={img} alt={`img_${i}`} />
                        );

                    })}
                </div >
            </div>)
    },
    // {
    //     product: '',
    //     moreID: '',
    //     icon: img resource,
    //     description: (<div></div>),
    //     more: (<div></div>)
    // }
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
                    {prodsAvailable.map(product => ProductItem(product))}
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



function ProductItem(productObj) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className='productItem'
            key={productObj.product}
        >
            <img className='productIcon' src={productObj.icon} alt={'image depicting ' + productObj.service} />
            <div className='productText'>
                <div className='productName'>{productObj.service}</div>
                <div className='productDescription'>{productObj.description}</div>
                {productObj.more && (
                    <div
                        id={productObj.moreID}
                        className={'productDescMore' + (expanded ? ' expanded' : '')}>
                        {productObj.more}
                    </div>)
                }
                {productObj.more &&
                    <div
                        className='moreButton'
                        onClick={() => {
                            setExpanded(!expanded)
                        }}
                    >
                        {expanded ? 'Show Less' : (productObj.moreID === 'waterBottlesMore' ? 'More Styles' : 'Show More')}
                    </div>}

            </div>
        </div>
    );
}