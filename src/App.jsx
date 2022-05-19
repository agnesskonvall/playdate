import { useState, useEffect } from 'react';
import './App.css';
import ScriptsComponent from './components/ScriptsComponent/ScriptsComponent';

function App() {
  return (
    <div className="App">
      <div id="game"></div>
      <div className="legendContainer">
        <div className="legend">
          <ul>
            <li>Äta</li>
            <li>Sova</li>
            <li>Programmera</li>
            <li>AW</li>
            <li>Bensträckare</li>
            <li>Stack Overflow</li>
            <li>???</li>
            <li>Stats</li>
          </ul>
        </div>
      </div>
      <ScriptsComponent />
    </div>
  );
}

export default App;
