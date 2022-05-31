import { useState, useEffect } from 'react';
import './App.css';
// import ScriptsComponent from './components/ScriptsComponent/ScriptsComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eat from './pages/Eat';
import Sleep from './pages/Sleep';
import Programming from './pages/Programming';
import Afterwork from './pages/Afterwork';
import Legstretch from './pages/Legstretch';
import Stackoverflow from './pages/Stackoverflow';
import Stats from './pages/Stats';
import Github from './pages/Github';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <div className="loading">
        .......Loading.......
        <br />
        (desktop support only)
      </div>
      <div className="gasme"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ata" element={<Eat />} />
          <Route path="/sova" element={<Sleep />} />
          <Route path="/programmera" element={<Programming />} />
          <Route path="/aw" element={<Afterwork />} />
          <Route path="/benstrackare" element={<Legstretch />} />
          <Route path="/stackoverflow" element={<Stackoverflow />} />
          <Route path="/placeholder" element={<Github />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
