import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../maps/Index';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;