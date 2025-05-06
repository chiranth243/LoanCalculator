import React from 'react';
import './AmortizationTable.css';

function AmortizationTable({ schedule, selectedCurrency, exchangeRates }) {
    const convertValue = (value) => {
        const rate = exchangeRates[selectedCurrency] || 1; // Default to 1 if no rate is found
        return (value * rate).toFixed(2);
    };

    return (
        <div className="amortization-table-container">
            <div className="table-outer-container">
                <h3 className="table-heading">Amortization Schedule ({selectedCurrency})</h3>
                <div className="table-container">
                    <table className="amortization-table">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Principal</th>
                                <th>Interest</th>
                                <th>Remaining Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.month}</td>
                                    <td>{convertValue(item.principal)} {selectedCurrency}</td>
                                    <td>{convertValue(item.interest)} {selectedCurrency}</td>
                                    <td>{convertValue(item.balance)} {selectedCurrency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AmortizationTable;