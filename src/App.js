// import Nav from './components/Nav';
// import MobileNavButton from './components/MobileNav';
import React, { useState } from 'react';
import Splash from './components/Splash';
import Consultation from './components/Consultation';
import Products from './components/Products';
import Services from './components/Services';
import ComingSoon from './components/ComingSoon';
import Reviews from './components/Reviews';
// import HIFU from './components/HIFU';

import './App.scss';
import './global.scss';


const menuOptions = [
  'Home',
  'Services',
  'Products',
  'Reviews',
  'Contact',
]


function App() {
  // const mobileView = window.innerWidth < 1000;
  const [currentView, setCurrentView] = useState('Home');

  return (
    <div className="App"    >
      <div id='topNav'>
        {menuOptions.map(menuItem => {
          const selected = menuItem === currentView;
          let className = 'navMenuItem' + (selected ? ' selected' : '');

          return (
            <span className={className}
              onClick={() => {
                setCurrentView(menuItem);
              }}
            >
              <span className='textSeperator'>{menuItem}</span>
            </span>);
        })}
      </div>

      {currentView === 'Home' &&
        <Splash />
      }
      {currentView === 'Services' &&
        <Services />
      }
      {currentView === 'Products' &&
        <Products />
      }
      {currentView === 'Reviews' &&
        <Reviews />
      }
      {currentView === '' &&
        <ComingSoon />
      }

      {currentView === 'Contact' &&
        <React.Fragment>
          <Consultation />
        </React.Fragment>
      }



    </div>
  );
}

export default App;



/**
 * about /rendering
 * services
 * special
 * review
 * contact
 */