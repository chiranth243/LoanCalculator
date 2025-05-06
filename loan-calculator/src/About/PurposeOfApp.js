import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import './PurposeOfApp.css';

function PurposeOfApp() {
  const purposes = [
    'React fundamentals (state, props, hooks)',
    'Component structure and code reusability',
    'Third-party API integration and live data rendering',
    'Working with tables, lists, and pagination',
    'Theme customization (dark/light mode toggle)',
    'Error handling and graceful UI fallbacks',
    'Responsive design and collapsible mobile header navigation (In Mobile view)',
  ];

  return (
    <div className="purpose-wrapper">
    <div className="purpose-container">
      <div className="header">
        <EmojiEventsIcon className="icon" />
        <Typography variant="h5" component="h2">
          Purpose of This App
        </Typography>
      </div>
      <Typography className="description">
        This project is designed to assess a candidate&apos;s React development skills, including:
      </Typography>
      <List className="purpose-list">
        {purposes.map((point, index) => (
          <ListItem key={index}>
            <ListItemText primary={`• ${point}`} />
          </ListItem>
        ))}
      </List>
      <div className="note">
        <TipsAndUpdatesIcon className="tip-icon" />
        <Typography className="note-text">
          For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
        </Typography>
      </div>
    </div>
    </div>
  );
};

export default PurposeOfApp;
