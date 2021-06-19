import React, { useState } from 'react';
import './services.scss';
import bootyIcon from '../assets/images/icons/bootyIcon.png';
import coolSculptIcon from '../assets/images/icons/coolSculpt.png';
import EMSculptIcon from '../assets/images/icons/EMSculpt_supplied.png';
import laserLipoIcon from '../assets/images/icons/laserLipo.png';
import lipoInjectionIcon from '../assets/images/icons/lipoLab_supplied.png';
import sculpSureIcon from '../assets/images/icons/sculpSure.png';
import ultherapyIcon from '../assets/images/icons/rectUltherapy.png';
import woodenTherapyIcon from '../assets/images/icons/woodenTherapy.png';



const services = [
    {
        service: 'CoolSculpting',
        icon: coolSculptIcon,
        description: 'An FDA-cleared treatment for visible fat bulges. This treatment is especially helpful in removing unwanted fat from along the bra line, under the chin, jawline, thigh, abdomen, underneath the buttocks (also known as banana roll), and upper arm.',
        moreID: 'coolSculptMore',
        more: (<div className='moreService'>
            <div className='subHeader'>More About This Service</div>

            <div>This FDA-cleared treatment crystalizes the fat cells in visible fat bulges anywhere on the
                body. These crystallized fat cells are then excreted from the body through the lymphatic
                system.
                No matter how much you exercise and eat healthy, it’s virtually impossible to lose those
                annoying muffin tops, love handles, and belly pooch. That’s exactly why CoolSculpting
                was developed. It targets fat cells alone, eliminating them in an easy, non-intrusive
                fashion that exercise and diet can’t achieve as quickly.
            </div>
            <div className='moreInfo'>
                <div className='subHeader'>During Your Session</div>
                During this procedure, you may experience sensations of pulling, tugging, mild pinching,
                intense cold, tingling, stinging, aching, and cramping at the treatment site. These
                sensations subside as the area becomes numb.
                <div className='subHeader'>After Your Session</div>
                <ul>
                    <li>Drink plenty of water, 2-3 liters daily</li>
                    <li>Exercise daily, a1t least 30 minutes cardio recommended</li>
                    <li>A well balanced, healthy diet is strongly encouraged</li>
                </ul>
            </div>
        </div>)

    },
    {
        service: 'SculpSure',
        icon: sculpSureIcon,
        description: 'Our non-surgical, laser body contouring helps you achieve a slimmer, more natural-looking appearance. No surgery. No downtime. Just results.',
        moreID: 'sculpSureMore',
        more: (<div className='moreService'>
            <div className='subHeader'>More About This Service</div>
            SculpSure is a convenient body contouring trfeatment that can done anytime. You can
            quite literally get it done during your lunch break and your coworkers would never know.
            This treatment is meant for people who are in fairly good shape and just want some
            help ‘melting’ a little extra fat.
            The laser used in SculpSure treatment causes a process that’s called apoptosis, which
            gently heats up fat cells and shrinks them, so they can be expelled through the body’s
            lymphatic system as waste. In the weeks after your treatment, you will see a permanent
            reduction in those persistent, unwanted pockets of body fat.
            SculpSure is classified as a permanent fat-reduction treatment. The most recent clinical
            studies show SculpSure will help destroy up to 30% of fat cells in the treated area. After
            the treatment, fat cells will not regenerate.
            <div className='subHeader'>After Your Session</div>
            <ul>
                <li> Makeup may be applied immediately post treatment</li>
                <li> Avoid exfoliation or any salicylic products</li>
                <li> No hot tubs and spas for at least one week post-treatment.</li>
                <li>Wash skin with cool water and a gentle cleanser. Moisturize daily.</li>
                <li> Use sun block with an SPF of 30 or greater if going out into the sun to help
                    prevent future sun damage.</li>
                <li>Drink 2-3 liters of water daily.</li>
            </ul>
        </div>)

    },
    {
        service: 'Laser Lipo Cavitation',
        icon: laserLipoIcon,
        description: 'Body contouring treatment used to remove fat deposits under your skin.',
        moreID: 'laserLipoMore',
        more: <div>
            <div className='subHeader'>More About This Service</div>
            <ul>
                <li>Cavitation - Fat Cell reduction</li>
                <li>Radio Frequency - Improves elasticity, stimulates collagen, reduces wrinkles,
                    lifts, and tightens the skin.</li>
                <li>Ultrasonic lipolysis pads - lifts and tightens the skin, reduces fat cells, calms
                    the skin, and reduces pores.</li>
                <li>Vacuum Bipolar RF - Firming, contour sculpting and cellulite reduction.</li>
            </ul>
        </div>

    },
    {
        service: 'Lipo Lab injections',
        icon: lipoInjectionIcon,
        description: 'Lipo Lab is a highly effective fat-melting injectable based on Phosphatidyl Choline (PPC). Unlike many other fat-burning injections that only shrink the size of fat cells, this solution permanently dissolves them. It offers an excellent alternative for the reduction and elimination of fat deposits on sites that are slow to respond to physical exercise and surgical procedures (e.g. double chin, abdomen fat). The treatment is painless and incredibly simple.',
    },
    {
        service: 'Ultherapy/HIFU',
        icon: ultherapyIcon,
        description: 'Ultherapy is the only FDA approved non-invasive procedure that is used for face lift, neck, chin, along the jawline. Droopy and sagging skin at the lateral brow for lifting and tightening. Improves lines and wrinkles everywhere. A single Ultherapy treatment typically lasts about 1-2 hours. During this time, your technician uses directs ultrasound energy beneath your skin through a specialized handpiece.',
        moreID: 'ulTherapyMore',
        more: (<div>
            <div className='subHeader'>More About This Service</div>
            Distinct benefits to Ultherapy:
            <ul>
                <li>It’s fast: For many patients, the procedure can be completed in an hour or less.</li>
                <li>It’s nonsurgical: Ultherapy is completely noninvasive and doesn’t require
                    needles or surgery.</li>
                <li>It’s long-lasting: Because Ultherapy triggers production of new collagen, the
                    results can last for years.</li>
                <li>It’s effective: As your skin contracts and collagen becomes more plentiful, you’ll
                    begin to see improved definition and tightness in the treated areas. This process
                    may take 2 to 3 months.</li>

            </ul>

            <div className='subHeader'>Before Your Session</div>
            <ul>
                <li> Moisturize for at least two days prior your treatment; drink plenty of water.</li>
                <li>Gently wash the treatment area with a mild cleanser. Do not apply any creams,
                    lotions, foundation, powder, or any products. No jewelry, earrings, etc.</li>
                <li> Wear comfortable clothing.</li>
            </ul>

            <div className='subHeader'>During Your Session</div>

            After cleansing the skin and identifying the specific areas to be treated, your technician
            will apply lidocaine cream to promote comfort during the procedure.Ultrasound gel is
            then applied, and the smooth treatment applicator is placed against your skin.
            <div className='subHeader'>After Your Session</div>
            <ul>
                <li> Makeup may be applied immediately post treatment.</li>
                <li>Avoid exfoliation or any salicylic products</li>
                <li> No hot tubs and spas for at least one week post-treatment.</li>
                <li> Wash skin with cool water and a gentle cleanser. Moisturize daily.</li>
                <li> Use sun block with an SPF of 30 or greater if going out into the sun to help
                    prevent future sun damage.</li>
                <li>Drink 2-3 liters of water daily.</li>
            </ul>
        </div >)


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
        moreID: 'buttLiftMore',
        more: <div>
            <div className='subHeader'>More About This Service</div>

            EMS Sculpt uses high intensity, focused electromagnetic energy to trigger what's called
            supramaximal contractions (the kind that cannot be achieved by voluntary muscle
            action). This results in: improvement of abdominal tone, strengthening of the abdominal
            muscles, development of firmer abdomen, and strengthening, toning, firming of the
            buttocks.
            Emsculpt is the number one treatment for diastasis (separation of the large abdominal
            muscle). No downtime and no discomfort. Patients who choose this treatment can enjoy
            noticeably more defined abs, pectoral, biceps, triceps and firming/ lifting buttocks.
            Emsculpt causes 20,000 muscle contractions in 30 minutes, contracting the muscles
            beyond any sort of physiological norms. Treatments can be done in conjunction with
            your regular workout routine.

            <div className='subHeader'>Before Your Session</div>
            <ul><li>Do not eat two hours before treatment.</li></ul>

            <div className='subHeader'>After Your Session</div>

            <ul>
                <li>High protein diet is recommended, low in saturated fat during your sessions</li>
                <li>Drink at least 2 liters of water daily</li>
                <li>Exercise regularly</li>
            </ul>
        </div>,


    },
    {
        service: 'Wood Therapy',
        icon: woodenTherapyIcon,
        description: 'Vigorous massage technique that utilizes wooden, handheld tools to increase lymphatic circulation, reduce wrinkles, and alleviate stress.',
        moreID: 'woodenTherapyMore',
        more: (<div>
            <div className='subHeader'>More About This Service</div>

            Wooden therapy instruments allow highly targeted pressure to be applied. This pressure
            intensifies the breakdown of fat and fibrous cellulite so that it can be eliminated naturally
            with other toxins. This combined with body contouring helps tighten your skin and
            improve elasticity.
            There are many benefits to getting wood therapy, which is why we encourage it as a
            regular part of your workout and self-care routine. In addition to being super relaxing
            and stress-relieving, wood therapy can help with:
            <ul>
                <li>Loosening tight muscles</li>
                <li>Breaking down cellulite and burning fat</li>
                <li>Naturally eliminating toxins in your body</li>
                <li>Speeding up your metabolism</li>
                <li>Stimulating blood circulation and lymphatic drainage</li>
            </ul>
        </div>),
    }
]
const comingSoon = [
    {
        service: 'Botox',
        description: 'Botox injections: Botox is a protein made from Botulinum toxin. This is the same toxin that causes botulism. As a cosmetic treatment, Botox injections can reduce the appearance of skin wrinkles. As a treatment for various health issues, including eyelid spasms, excessive sweating, some bladder disorders, and migraine.',
    },
    {
        service: 'Fillers',
        icon: woodenTherapyIcon,
        description: 'Hyaluronic acid is a naturally occurring substance that is already found in your skin. It helps keep skin plump and hydrated. With the aging process the skin lost the subcutaneous fat that supports our skin, causes skin sags. That’s why Dermal fillers are very popular in the cosmetics world.',
        more: 'Dermal fillers are hydraulic acid or gel-like substances that are injected beneath the skin to restore lost volume, smooth lines and soften creases that are common in the cheeks, lips, and around the mouth 👄 Hyaluronic acid can also be injected into the back of the hands to help add fullness and volume for a smoother, fuller appearance.',

    },
    {
        service: 'Monthly Subscription',
        description: 'We are developing a subscription service to better suit our clients needs!',
    },

]

export default function Services() {
    return (
        <div id='services' className=' flex1'>
            <div id='servicesHeader' className='centeredFlex'>Services</div>
            <div id='servicesBody'>
                {services.map(serviceObj => {
                    return ServiceItem(serviceObj);
                })}
            </div>
        </div>
    )
}

function ServiceItem(serviceObj) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className='serviceItem'
            key={serviceObj.service}
        >
            <img src={serviceObj.icon} alt={'image depicting ' + serviceObj.service} className='serviceIcon' />
            <div className='serviceText'>
                <div className='serviceName'>{serviceObj.service}</div>
                <div className='serviceDescription'>{serviceObj.description}</div>
                {serviceObj.more && <div id={serviceObj.moreID} className={'serviceDescMore' + (expanded ? ' expanded' : '')}>{serviceObj.more}</div>}
                {serviceObj.more && <div className='moreButton' onClick={() => { setExpanded(!expanded) }}>{expanded ? 'Show Less' : 'More Info'}</div>}
            </div>
        </div>
    );
}