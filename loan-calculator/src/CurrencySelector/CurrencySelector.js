import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import './CurrencySelector.css';
import Button from '@mui/material/Button';

function CurrencySelector({ emi, selectedCurrency, setSelectedCurrency, exchangeRates, darkMode, handleResetTable }) {
    const currencyList = Object.keys(exchangeRates);

    return (
        <div className={`currency-selector-container ${darkMode ? 'dark-mode' : ''}`}>
            <h3 className='emi-header'>Monthly EMI: ${emi} USD</h3>
            <div className={`currency-selector-row ${darkMode ? 'dark-mode' : ''}`}>
                <Autocomplete
                    value={selectedCurrency || null}
                    onChange={(event, newValue) => {
                        setSelectedCurrency(newValue);
                    }}
                    disableClearable
                    options={currencyList}
                    renderInput={(params) => (
                        <TextField {...params} label="Currency" variant="outlined" />
                    )}
                    clearOnEscape
                    isOptionEqualToValue={(option, value) => option === value}
                />
                <div className="loan-reset-button-container">
                    <Button variant="contained" color="primary" onClick={handleResetTable}>
                        Reset Table
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CurrencySelector;
