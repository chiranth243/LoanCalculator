import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import errorImage from '../ErrorPage/Image/ErrorImage.png'; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-text">
        Page Not Found <span role="img" aria-label="warning">⚠️</span>
      </div>
      <div className="error-subtext">
        We couldn't find the page you are looking for.
      </div>
      <Link to="/" className="back-button">
        <Button variant="contained" sx={{ backgroundColor: '#6C63FF', color: '#fff' }}>
          Back To Home
        </Button>
      </Link>
      <img src={errorImage} alt="404 Illustration" className="error-img" />
    </div>
  );
};

export default ErrorPage;