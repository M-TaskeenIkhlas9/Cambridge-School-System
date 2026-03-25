import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">CAMBRIDGE</span>
          <span className="logo-subtitle">School System Muridke</span>
        </Link>
        
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="contact-info">
          <span className="phone">+92-321-1234567</span>
          <Link to="/admissions" className="consultation-btn">
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="mobile-menu-line" />
          <span className="mobile-menu-line" />
          <span className="mobile-menu-line" />
        </button>
      </div>

      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="mobile-nav-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <span className="logo-text">CAMBRIDGE</span>
              <span className="logo-subtitle">School System Muridke</span>
            </div>
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>
          </div>

          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/academics" onClick={closeMenu}>Academics</Link></li>
            <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
            <li><Link to="/facilities" onClick={closeMenu}>Facilities</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <div className="mobile-nav-cta">
            <span className="phone">+92-321-1234567</span>
            <Link to="/admissions" className="consultation-btn" onClick={closeMenu}>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
