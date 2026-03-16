import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription submitted:', formData);
    // Handle subscription here
    alert('Thank you for subscribing to The Cambridge School System Muridke updates!');
    setFormData({
      email: '',
      name: ''
    });
  };

  return (
    <section className="subscribe-section">
      <div className="wave-background">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h2 className="subscribe-title">SUBSCRIBE TO THE CAMBRIDGE SCHOOL SYSTEM MURIDKE</h2>
              <p className="subscribe-description">
                Get expert tips, educational resources, and exclusive offers delivered straight to your inbox.
              </p>
            </div>
            
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="subscribe-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
