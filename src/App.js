import React from 'react'
import Home from 'components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
