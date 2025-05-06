import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import './ExchangeRates.css';

function ExchangeRates(){
  const [rates, setRates] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a failed fetch with a 5 second delay
    const timer = setTimeout(() => {
      fetch('https://invalid-api.exchangeratesapi.io/latest')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
          }
          return response.json();
        })
        .then((data) => {
          setRates(data.rates);
          setError('');
        })
        .catch(() => {
          setError('Unable to fetch exchange rates. Please try again later.');
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000); // Delay of 5 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <div className="exchange-container">
      <Typography variant="h4" gutterBottom>
        Exchange Rates
      </Typography>

      {loading && <CircularProgress />}

      {!loading && error && <div className="error-message">{error}</div>}

      {!loading && rates && (
        <div>
          {Object.entries(rates).map(([currency, rate]) => (
            <Typography key={currency}>
              {currency}: {rate}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExchangeRates;