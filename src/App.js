import React from 'react';
import Hero from './components/Hero';
import GlobalStyles from './components/GlobalStyles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars,faTimes, faHamburger, faBeer, faWineBottle } from '@fortawesome/free-solid-svg-icons'
import "animate.css/animate.min.css";
import About from './components/About'; 
import Stats from './components/Stats';
import Parties from './components/Parties';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';


library.add(fab, faCheckSquare, faCoffee, faBars, faTimes, faHamburger, faBeer, faWineBottle);

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Hero />
      <About />
      <Stats />
      <Parties />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
