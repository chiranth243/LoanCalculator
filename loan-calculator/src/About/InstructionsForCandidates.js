import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './InstructionsForCandidates.css';

function InstructionsForCandidates() {
    const instructions = [
        'Push the entire project to a public GitHub repository.',
        'Make sure to commit regularly with clear messages after completing each feature.',
        'Use the provided EMI formula to perform calculations.',
        'Use Context API for global state management (e.g. theme, currency).',
        'Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).',
        'Integrate the ExchangeRate API for live currency conversion.',
        'Ensure the app is fully responsive on all screen sizes.',
        "Implement both light and dark modes using Material UI's theming system.",
        'Add a 404 Not Found page for unmatched routes.',
        'Handle runtime errors gracefully by showing an Error Page.',
        'Once deployed, add the live deployment link in the About section of your GitHub repo.',
        'Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).',
    ];

    return (
        <div className="instructions-wrapper">
            <div className="instructions-container">
                <div className="header">
                    <AssignmentIcon className="icon" />
                    <Typography variant="h5" component="h2">
                        Instructions for Candidates
                    </Typography>
                </div>
                <Typography className="subtitle">
                    Please follow these instructions to complete and submit your project:
                </Typography>
                <List>
                    {instructions.map((text, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`• ${text}`} />
                        </ListItem>
                    ))}
                </List>
                <div className="footer">
                    <CheckBoxIcon className="check-icon" />
                    <Typography className="footer-text">
                        Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
                    </Typography>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default InstructionsForCandidates;