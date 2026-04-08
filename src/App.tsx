import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandStrategy from './pages/BrandStrategy';
import BrandIdentity from './pages/BrandIdentity';
import Process from './pages/Process';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrandStrategy />} />
        <Route path="/identity" element={<BrandIdentity />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </Router>
  );
}
