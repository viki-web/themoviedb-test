import React, { useEffect } from 'react';

const BackgroundSetter = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-background]');

    elements.forEach((element) => {
      const backgroundImageUrl = element.getAttribute('data-background');
      element.style.backgroundImage = `url(${backgroundImageUrl})`;
    });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return null; // This component doesn't render any JSX
};

export default BackgroundSetter;