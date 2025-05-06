import React from 'react';
import "./LoanCalculateInputMain.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoanCalculateInputMain({ loanInput, setLoanInput, darkMode, handleCalculate }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoanInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className={`loan-calculate-input-main ${darkMode ? 'dark' : ''}`}>
            <div className='loan-calculate-input-column'>
                <div className='loan-calculate-input-main__title'>
                    Loan Calculator Dashboard
                </div>
                <div className="loan-calculate-input-outer-container">
                    <TextField
                        id="loan-amount"
                        label="Loan Amount"
                        variant="outlined"
                        type="number"
                        name="loanAmount"
                        value={loanInput.loanAmount}
                        onChange={handleInputChange}
                        InputProps={{ inputProps: { className: 'no-spinner' } }}
                    />
                    <TextField
                        id="interest-rate"
                        label="Interest Rate (%)"
                        variant="outlined"
                        type="number"
                        name="interestRate"
                        value={loanInput.interestRate}
                        onChange={handleInputChange}
                        InputProps={{ inputProps: { className: 'no-spinner' } }}
                    />
                    <TextField
                        id="term"
                        label="Term (Years)"
                        variant="outlined"
                        type="number"
                        name="term"
                        value={loanInput.term}
                        onChange={handleInputChange}
                        InputProps={{ inputProps: { className: 'no-spinner' } }}
                    />
                </div>
                <div className="loan-calculate-button-container">
                    <Button variant="contained" color="primary" onClick={handleCalculate}>
                        CALCULATE
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default LoanCalculateInputMain;