
import Nav from './components/Nav';
import Splash from './components/Splash';
import Consultation from './components/Consultation';
import About from './components/About';
import EMSculpt from './components/EMSculpt';
import './App.scss';
import './global.scss';

function App() {



  return (
    <div className="App">
      <Nav />
      <Splash/>
      <Consultation/>
      <About/>
      <EMSculpt/>

    </div>
  );
}

export default App;
