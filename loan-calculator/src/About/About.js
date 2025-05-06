import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-outer-container'>
            <div className="about-container">
                <h3 className="about-title">About Our Loan Calculator</h3>
                <p className="about-description">
                    This loan Calculator App is a modern, single-page web application built using <strong>React JS</strong> and <strong>Material UI</strong>. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
                </p>
                <hr/>
            </div>
        </div>
    );
}

export default About;
