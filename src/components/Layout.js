import React from 'react';
import Header from './Header';
import Preloader from './Preloader';
import ScrollToTop from './ScrollToTop';
import BackgroundSetter from './BackgroundSetter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => {
  return (
    <div>
        <BackgroundSetter />
        <Preloader />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        {/* Add footer or other components as needed */}
    </div>
  );
};

export default Layout;