import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Second from './pages/Second.jsx';
import { Sign } from './pages/Sign.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/second" element={<Second />} />
        <Route exact path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
};

export default App;
