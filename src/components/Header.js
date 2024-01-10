import React from 'react';
import Link from 'next/link';

import styles from '../assets/Header.module.css';

const Header = () => {
  return (
    <header>
        <div id="sticky-header" className="menu-area transparent-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav show">
                                <div className="logo">
                                    <a href="/">
                                        <img src="../img/logo/logo.png" alt="Logo"/>
                                    </a>
                                </div>
                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><a href="#">Explore</a>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Movies</a>
                                        </li>
                                        <li><a href="tv-show.html">tv shows</a></li>
                                        <li><a href="contact.html">Help Center</a></li>
                                    </ul>
                                </div>
                                <div className="header-action d-none d-md-block">
                                    <ul>
                                        <li className="header-search"><a href="#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="mobile-menu">
                            <div className="close-btn"><i className="fas fa-times"></i></div>

                            <nav className="menu-box">
                                <div className="nav-logo"><a href="index.html"><img src="../img/logo/logo.png" alt="" title=""/></a>
                                </div>
                                <div className="menu-outer">
                                   
                                </div>
                                <div className="social-links">
                                    <ul className="clearfix">
                                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="menu-backdrop"></div>
                      
                        <div className="modal fade" id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <form>
                                        <input type="text" placeholder="Search here..."/>
                                        <button><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;