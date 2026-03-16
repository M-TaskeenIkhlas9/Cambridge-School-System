import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title animate-fadeIn">LET'S GET STARTED</h2>
          <p className="section-subtitle animate-fadeIn delay-200">
            Ready to help your child succeed? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="form-container animate-slideInUp delay-300">
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="icon">👤</span>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="icon">✉️</span>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  <span className="icon">📞</span>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92-321-1234567"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <span className="icon">💬</span>
                  Tell us about your child's needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Please share your child's academic challenges, goals, or any specific areas where they need support..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <span className="btn-text">SEND MESSAGE</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
