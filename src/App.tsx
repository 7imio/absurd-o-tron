import { useState } from 'react';

import './index.css';

import Footer from './Components/Footer/Footer';
import GenerateName from './Components/GenerateName';
import NameDisplay from './Components/NameDisplay';
import WhatDoesThisStandsFor from './Components/WhatDoesThisStandsFor/WhatDoesThisStandsFor';

function App() {
  const [name, setName] = useState<string>('');
  const [displayExplained, setDisplayExplained] = useState<boolean>(false);
  return (
    <>
      <div className="app">
        <h1>Absurd-O-Tron</h1>
        <button onClick={() => setDisplayExplained(!displayExplained)}>
          {displayExplained ? 'Hide explanation' : 'What does this stands for?'}
        </button>
        {displayExplained ? (
          <WhatDoesThisStandsFor />
        ) : (
          <>
            <GenerateName setName={setName} />
            <NameDisplay name={name} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
