import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandStrategy from './pages/BrandStrategy';
import BrandIdentity from './pages/BrandIdentity';
import BrandIdentity02 from './pages/BrandIdentity02';
import BrandIdentity03 from './pages/BrandIdentity03';
import Process from './pages/Process';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrandStrategy />} />
        <Route path="/identity" element={<BrandIdentity />} />
        <Route path="/identity/02" element={<BrandIdentity02 />} />
        <Route path="/identity/03" element={<BrandIdentity03 />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </Router>
  );
}
