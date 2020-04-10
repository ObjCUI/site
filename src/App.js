import React from 'react';
import Introduction from './Introduction';
import Logo from './Logo';
import './App.css';
import Samples from './Sample';

function App() {
  return (
    <div>
      <header className="navigation">
        <Logo fontSize='24px' bold={true}/>
      </header>
      <Introduction />
      <Samples />
    </div>
  );
}

export default App;
