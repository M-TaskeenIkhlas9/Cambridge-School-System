import React from 'react';
import './WhatWeDo.css';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      title: "TUTORING",
      image: "https://picsum.photos/seed/tutoring/300/200.jpg",
      description: "One-on-one personalized tutoring sessions tailored to your child's specific learning needs and academic goals."
    },
    {
      title: "COACHING", 
      image: "https://picsum.photos/seed/coaching/300/200.jpg",
      description: "Academic coaching to help students develop study skills, time management, and organizational strategies."
    },
    {
      title: "EDUCATIONAL ADVOCACY",
      image: "https://picsum.photos/seed/advocacy/300/200.jpg", 
      description: "Supporting families in navigating educational systems and ensuring students receive appropriate accommodations."
    }
  ];

  return (
    <section className="what-we-do" id="services">
      <div className="container">
        <h2 className="section-title">WHAT WE DO</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
