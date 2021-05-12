
import './services.scss';

export default function Services() {


    return (
        <div id='services' className='fullPageSection flex1'>
            <div id='servicesHeader' className='centeredFlex'>Services</div>
            <ul>
                <li>CoolSculpting
                    <br />
                    <span className='desc'>
                        An FDA-cleared treatment for visible fat bulges in the submental 
                        (under the chin) and submandibular (under the jawline) areas, thigh, abdomen, and flank,
                        along with bra fat, back fat, underneath the buttocks (also known as banana roll), and upper arm.
                    </span>
                </li>
                <li>SculpSure
                    <br />
                    <span className='desc'>
                        A non-invasive laser body contouring that helps you achieve
                        a slimmer, more natural-looking appearance. No surgery.
                        No downtime. Just results.
                    </span>

                </li>
                <li>Ultherapy/HIFU
                    <br />
                    <span className='desc'>
                        A non-surgical skin lift, to tighten skin around eyes and browsm, and to lift the chin, tighten the neck and reduce wrinkles
                    </span>
                </li>
                <li>EMS SCULPT
                    <br />
                    <span className='desc'>
                        Build muscle and sculpt your body through the high intensity electromagnetic therapy.
                        This procedure one can enlarge current muscles, as well as grow new muscle fibers
                    </span>
                </li>
                <li>Butt & Breast lift
                <br />
                    <span className='desc'>
                        Treatment for excess skin and fat from aging, heredity factors, or the results after dramatic weight loss. Appearance will dramatically improve after a life.
                    </span>

                </li>
                <li>Wooden therapy
                    <br />
                    <span className='desc'>
                        A vigorous massage technique that utilizes wooden, handheld tools to increase lymphatic circulation, reduce wrinkles, alleviate stress.  </span>
                </li>
                <li>Laser lipo cavitation.
                    <br />

                    <span className='desc'>
                        A body contouring treatment that is used to remove fat deposits under your skin.
                        </span>
                </li>
            </ul>
        </div>
    )
}