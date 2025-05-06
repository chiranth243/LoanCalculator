import React, { useState } from 'react';
import HeaderComponent from '../HeadeComponent/HeaderComponent';
import './Home.css';
import LoanCalculateInputMain from '../LoanCalculateInput/LoanCalculateInputMain';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loanInput, setLoanInput] = useState({
    loanAmount: 100000,
    interestRate: 8.5,
    term: 5,
  });

  return (
    <div className="home-container">
      <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="home-content">
        <LoanCalculateInputMain loanInput={loanInput} setLoanInput={setLoanInput} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default Home;
