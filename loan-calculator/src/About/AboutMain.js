import React from 'react'
import About from './About';
import HeaderComponent from '../HeadeComponent/HeaderComponent';
import InstructionsForCandidates from './InstructionsForCandidates';
import PurposeOfApp from './PurposeOfApp';
import EmiFormula from './EmiFormula';

function AboutMain() {
  return (
    <div>
      <HeaderComponent />
      <About />
      <InstructionsForCandidates />
      <EmiFormula />
      <PurposeOfApp />
    </div>
  )
}

export default AboutMain;