import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloaderElement = document.getElementById('preloader');

    const hidePreloader = () => {
      setTimeout(() => {
        preloaderElement.style.display = 'none';
      }, 0);
    };

    hidePreloader();

    // Call additional functions or include other logic here if needed
    // For example: mainSlider(), aosAnimation(), wowAnimation()
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div id="preloader">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <img src="../preloader.svg" alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;