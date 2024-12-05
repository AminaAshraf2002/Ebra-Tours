import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import logo from '../assets/ebraholidays.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        AOS.init({ duration: 1000 });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} data-aos="fade-down">
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <button
                className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {menuOpen ? '×' : '≡'}
            </button>
            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/packages" onClick={closeMenu}>Packages</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;