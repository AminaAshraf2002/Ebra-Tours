import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import logo from '../assets/ebraholidays.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;