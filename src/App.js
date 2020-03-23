import React from 'react';
import Hero from './components/Hero';
import GlobalStyles from './components/GlobalStyles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee, faBars, faTimes);

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Hero />
    </React.Fragment>
  );
}

export default App;
