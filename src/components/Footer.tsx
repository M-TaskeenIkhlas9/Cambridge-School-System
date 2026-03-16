import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', text: 'Home' },
    { to: '/academics', text: 'About Us' },
    { to: '/facilities', text: 'Services' },
    { to: '/#tutors', text: 'Our Tutors' },
    { to: '/#blog', text: 'Blog' },
    { to: '/contact', text: 'Contact' }
  ];

  const socialLinks = [
    { icon: '📘', href: 'https://facebook.com/', label: 'Facebook' },
    { icon: '🐦', href: 'https://twitter.com/', label: 'Twitter' },
    { icon: '📷', href: 'https://instagram.com/', label: 'Instagram' },
    { icon: '💼', href: 'https://linkedin.com/', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">CAMBRIDGE</span>
              <span className="logo-subtitle">School System Muridke</span>
            </div>
            <p className="footer-description">
              Empowering students to become confident, capable learners who believe in their ability to succeed.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.to.startsWith('/#') ? (
                    <a href={link.to}>{link.text}</a>
                  ) : (
                    <Link to={link.to}>{link.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                <span>123-456-7890</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@candolearning.com</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Education Street<br />Learning City, LC 12345</span>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Office Hours</h3>
            <div className="hours">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} The Cambridge School System Muridke. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
