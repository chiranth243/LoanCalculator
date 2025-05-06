import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import './EmiFormula.css';

function EmiFormula() {
    return (
        <div className="emi-wrapper">
            <div className="emi-container">
                <div className="emi-header">
                    <TextFieldsIcon className="emi-icon" />
                    <Typography variant="h5" component="h2">
                        EMI Formula Used
                    </Typography>
                </div>

                <Typography className="emi-description" gutterBottom>
                    The EMI (Equated Monthly Installment) is calculated using the standard formula:
                </Typography>

                <Typography variant="body1" className="emi-equation">
                    <code>
                        EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
                    </code>
                </Typography>

                <Typography className="emi-where" gutterBottom>
                    Where:
                </Typography>

                <List dense>
                    <ListItem>
                        <ListItemText primary={<span><strong>P</strong> = Principal loan amount</span>} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={<span><strong>R</strong> = Monthly interest rate (annual rate / 12 / 100)</span>} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={<span><strong>N</strong> = Loan duration in months</span>} />
                    </ListItem>
                </List>
                <hr />
            </div>
        </div>
    );
};

export default EmiFormula;
