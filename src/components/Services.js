import './services.scss';
import bootyIcon from '../assets/images/icons/bootyIcon.png';
import coolSculptIcon from '../assets/images/icons/coolSculpt.png';
import EMSculptIcon from '../assets/images/icons/EMSculpt.png';
import laserLipoIcon from '../assets/images/icons/laserLipo.png';
import sculpSureIcon from '../assets/images/icons/sculpSure.png';
import ultherapyIcon from '../assets/images/icons/ultherapy.png';
import woodenTherapyIcon from '../assets/images/icons/woodenTherapy.png';



const services = [
    {
        service: 'CoolSculpting',
        icon: coolSculptIcon,
        description: 'An FDA-cleared treatment for visible fat bulges. This treatment is especially helpful in removing unwanted fat from along the bra line, under the chin, jawline, thigh, abdomen, underneath the buttocks (also known as banana roll), and upper arm.',
    },
    {
        service: 'SculpSure',
        icon: sculpSureIcon,
        description: 'Our non-surgical, laser body contouring helps you achieve a slimmer, more natural-looking appearance. No surgery. No downtime. Just results.',
    },
    {
        service: 'Laser Lipo Cavitation',
        icon: laserLipoIcon,
        description: 'Body contouring treatment used to remove fat deposits under your skin.',
    },
    {
        service: 'Ultherapy/HIFU',
        icon: ultherapyIcon,
        description: 'This non-surgical skin lift tightens skin around the eyes, brows, neck, and chin; while helping to reduce wrinkles.',
    },
    {
        service: 'Butt & Breast Lift',
        icon: bootyIcon,
        description: 'Dramatically improve your appearance with this treatment that targets excess skin and fat resulting from aging, heredity factors, or dramatic weight loss.',
    },
    {
        service: 'EMSculpt',
        icon: EMSculptIcon,
        description: 'Build muscle and sculpt your body through this high-intensity electromagnetic therapy. This procedure can enlarge current muscles, as well as promote the growth of new muscle fibers.',
    },
    {
        service: 'Wood Therapy',
        icon: woodenTherapyIcon,
        description: 'Vigorous massage technique that utilizes wooden, handheld tools to increase lymphatic circulation, reduce wrinkles, and alleviate stress.',
    },

]

export default function Services() {


    return (
        <div id='services' className=' flex1'>
            <div id='servicesHeader' className='centeredFlex'>Services</div>
            <div id='servicesBody'>
                {services.map(serviceObj => {
                    return (
                        <div
                            className='serviceItem'
                            key={serviceObj.service}
                        >
                            <img src={serviceObj.icon} className='serviceIcon' />
                            <div className='serviceText'>
                                <div className='serviceName'>{serviceObj.service}</div>
                                <div className='serviceDescription'>{serviceObj.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}