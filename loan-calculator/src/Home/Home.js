import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComponent from '../HeadeComponent/HeaderComponent';
import './Home.css';
import LoanCalculateInputMain from '../LoanCalculateInput/LoanCalculateInputMain';
import AmortizationTable from '../AmortizationTable/AmortizationTable';
import CurrencySelector from '../CurrencySelector/CurrencySelector';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loanInput, setLoanInput] = useState({
    loanAmount: 100000,
    interestRate: 8.5,
    term: 5,
  });
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});

  // Fetch exchange rates once
  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/b0b57e93bac6dfd7be6635f4/latest/USD'
        );
        setExchangeRates(response.data.conversion_rates);
      } catch (error) {
        console.error('Exchange rate fetch error:', error);
      }
    }
    fetchRates();
  }, []);

  const handleCalculate = () => {
    const P = parseFloat(loanInput.loanAmount);
    const R = parseFloat(loanInput.interestRate) / 12 / 100;
    const N = parseInt(loanInput.term) * 12;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));

    const amortization = [];
    let balance = P;
    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emiValue - interest;
      balance -= principal;
      amortization.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }
    setSchedule(amortization);
  };

  const handleResetTable = () => {
    setEmi(null);
    setSchedule([]);
    setSelectedCurrency('USD');
    setExchangeRates({});
  }

  return (
    <div className="home-container">
      <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`home-content ${darkMode ? 'dark-mode' : ''}`}>
        <LoanCalculateInputMain
          loanInput={loanInput}
          setLoanInput={setLoanInput}
          darkMode={darkMode}
          handleCalculate={handleCalculate}
        />
        {emi && (
          <div className={`emi-result ${darkMode ? 'dark-mode' : ''}`}>
            <CurrencySelector
              emi={emi}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              exchangeRates={exchangeRates}
              darkMode={darkMode}
              handleResetTable={handleResetTable}
            />
            <AmortizationTable schedule={schedule} darkMode={darkMode} selectedCurrency={selectedCurrency} exchangeRates={exchangeRates} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
