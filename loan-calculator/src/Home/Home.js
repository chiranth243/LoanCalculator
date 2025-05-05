import React, { useState } from 'react'
import HeaderComponent from '../HeadeComponent/HeaderComponent';
import './Home.css';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`${themeClass} home-outside`}>
      <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Home;
