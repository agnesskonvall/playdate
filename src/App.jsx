import { useState, useEffect } from 'react';
import Legend from './components/LegendCard/Legend';
import './App.css';
import ScriptsComponent from './components/ScriptsComponent/ScriptsComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eat from './pages/Eat';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <div id="game"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ata" element={<Eat />} />
          {/* <Route path="/sova" element={<Sleep />} />
          <Route path="/programmera" element={<Programming />} />
          <Route path="/aw" element={<Aw />} />
          <Route path="/benstrackare" element={<Legstretcher />} />
          <Route path="/stackoverflow" element={<StackOverflow />} />
          <Route path="/placeholder" element={<Placeholder />} />
          <Route path="/stats" element={<Stats />} /> */}
        </Routes>
      </BrowserRouter>
      <ScriptsComponent />
    </div>
  );
}

export default App;
