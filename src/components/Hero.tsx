import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img 
          src="https://picsum.photos/seed/cambridge-school/1200/600.jpg" 
          alt="Cambridge School Campus" 
          className="hero-bg-img"
        />
      </div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ '--delay': `${i * 0.5}s` } as React.CSSProperties}></div>
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            WELCOME TO <br />
            <span className="highlight">CAMBRIDGE SCHOOL</span>
          </h1>
          <p className="hero-subtitle">System Muridke</p>
          <p className="hero-description">
            Excellence in education since 1990. We provide a nurturing environment where students 
            develop critical thinking, leadership skills, and a passion for lifelong learning.
          </p>
          <div className="hero-buttons">
            <button
              className="cta-button primary"
              onClick={() => navigate('/admissions')}
            >
              Apply Now
            </button>
            <button
              className="cta-button secondary"
              onClick={() => navigate('/facilities')}
            >
              Virtual Tour
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Faculty</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
