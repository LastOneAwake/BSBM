// import Nav from './components/Nav';
// import MobileNavButton from './components/MobileNav';
import Splash from './components/Splash';
import Consultation from './components/Consultation';
import About from './components/About';
import Services from './components/Services';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
// import HIFU from './components/HIFU';

import './App.scss';
import './global.scss';

function App() {
  const mobileView = window.innerWidth < 1000;
  return (
    <div className="App"    >
      {/* {!mobileView && <Nav />}
      {mobileView && <MobileNavButton />} */}
      <Splash />
      <About mobileView={mobileView} />
      <Services />
      <Specials />
      <Reviews />
      <Consultation />
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