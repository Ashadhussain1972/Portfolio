import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fix import path
import Projects from './components/Projects.jsx';
import Home from './components/Home.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects />} /> {/* Fixed Route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
