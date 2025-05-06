import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutMain from './About/AboutMain';
import ErrorPage from './ErrorPage/ErrorPage';
import ExchangeRates from './ExchangeRates/ExchangeRates';


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Main;