import './specials.scss';
import specialsPlacehodler from '../assets/images/icons/specialsPlaceholder.jpg';

const packages = [
    {
        name: 'Package 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan',
        image: specialsPlacehodler
    },
    {
        name: 'Package 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan',
        image: specialsPlacehodler
    },
    {
        name: 'Package 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula leo sit amet nisi aliquam accumsan',
        image: specialsPlacehodler
    },
]


export default function Specials() {

    return (
        <div id='specials' className='fullPageSection'>
            <div id='specialsHeader'>Specials</div>
            <div id='specialsBody'>
                {packages.map((packageObj, i) => {
                    return (
                        <div className='packageDetails'
                            key={packageObj.name + i}>
                            <div className='packageName'>{packageObj.name}</div>
                            <div className='packageDesc'>{packageObj.desc}</div>
                            <img src={packageObj.image} alt='placeHolder' />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}