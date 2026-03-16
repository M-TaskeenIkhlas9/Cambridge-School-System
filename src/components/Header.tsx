import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
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
      </div>
    </header>
  );
};

export default Header;
