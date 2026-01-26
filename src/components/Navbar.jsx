import React, { useState } from "react";

function Navbar() {
    // 1. Create a state to track if the menu is open
    const [isOpen, setIsOpen] = useState(false);

    // 2. Function to toggle that state
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar navbar-inverse common-menu" id="top-nav">
                <div className="container navigation-tb">
                    <div className="navbar-header">
                        {/* 3. Added onClick and kept your exact classes */}
                        <button 
                            type="button" 
                            className="navbar-toggle pull-left nav-icon1"
                            onClick={toggleMenu}
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    {/* 4. The "in" class is now controlled by React state */}
                    <div className={`collapse navbar-collapse no-padding navbar-inverse res-menu side-collapse ${isOpen ? 'in' : ''}`}>
                        <div id="menu-list">
                            <div className="menu-home-width no-padding">
                                <ul className="nav navbar-nav navbar-left no-margin accordion" id="accordion">
                                    {/* 5. Added onClick to close button */}
                                    <li className="close-icon" onClick={() => setIsOpen(false)}>
                                        <p className="close-btn">
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </p>
                                    </li>
                                    <li className="dropdown menu-fs menu">
                                        <a href="/" className="pagescroll menu-link dropdown-toggle">Home </a>
                                    </li>
                                    <li className="dropdown menu-fs menu">
                                        <a href="/about/" className="pagescroll dropdown-toggle"> About</a>
                                    </li>
                                    <li className="dropdown menu-fs menu">
                                        <a href="/team/" className="pagescroll dropdown-toggle"> Our Team</a>
                                    </li>
                                    <li className="dropdown menu-fs menu">
                                        <a href="/contact/" className="pagescroll dropdown-toggle"> contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;