import Nav from './components/Nav';
import MobileNavButton from './components/MobileNav';
import Splash from './components/Splash';
import Consultation from './components/Consultation';
import About from './components/About';
import EMSculpt from './components/EMSculpt';
import HIFU from './components/HIFU';

import './App.scss';
import './global.scss';

function App() {
  const mobileView = window.innerWidth < 1000;
  return (
    <div className="App"    >
      {!mobileView && <Nav />}
      {mobileView && <MobileNavButton />}
      <Splash />
      <About mobileView={mobileView}/>
       {/* <Consultation /> */}
      {/* 
      <EMSculpt />
      <HIFU />  */}

    </div>
  );
}

export default App;



/**
 * about
 * services
 * special
 * review
 * contact
 */