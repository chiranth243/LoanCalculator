import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutMain from './About/AboutMain';
import ErrorPage from './ErrorPage/ErrorPage';
import ExchangeRates from './ExchangeRates/ExchangeRates';


function Main() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<AboutMain darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Main;