import React from 'react';
import Home from 'components/Home';
import Services from 'components/Services';
import Contact from 'components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
