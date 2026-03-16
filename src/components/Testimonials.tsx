import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Fatima Khan",
      rating: 5,
      text: "Cambridge School System Muridke has been a blessing for my son. His confidence has soared and his grades have improved dramatically. The teachers are patient, knowledgeable, and truly care about their students' success.",
      avatar: "https://picsum.photos/seed/fatima/60/60.jpg"
    },
    {
      name: "Ahmed Hassan",
      rating: 5,
      text: "We've tried several schools, but Cambridge stands out. Their personalized approach and focus on building fundamental skills has made all the difference for our daughter. We're proud to be part of this institution.",
      avatar: "https://picsum.photos/seed/ahmed/60/60.jpg"
    },
    {
      name: "Ayesha Malik",
      rating: 5,
      text: "The educational support services helped us navigate our child's learning challenges and ensure he received the support he needed. We're so grateful for their expertise and Islamic values integration.",
      avatar: "https://picsum.photos/seed/ayesha/60/60.jpg"
    },
    {
      name: "Muhammad Ali",
      rating: 5,
      text: "The quality of education at Cambridge School System Muridke is exceptional. My children have developed not just academically but also morally. The Islamic environment is exactly what we wanted for our family.",
      avatar: "https://picsum.photos/seed/muhammad/60/60.jpg"
    },
    {
      name: "Sana Sheikh",
      rating: 5,
      text: "The teachers at Cambridge go above and beyond for their students. My daughter was struggling with math, but now she excels thanks to the dedicated staff and excellent teaching methods.",
      avatar: "https://picsum.photos/seed/sana/60/60.jpg"
    },
    {
      name: "Bilal Ahmed",
      rating: 5,
      text: "As a parent, I appreciate the balance between academic excellence and Islamic values. The school has exceeded our expectations and my children love coming to school every day.",
      avatar: "https://picsum.photos/seed/bilal/60/60.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">OUR PARENTS TESTIMONIALS</h2>
        <p className="section-subtitle">
          Hear what Pakistani parents and students have to say about their experience with Cambridge School System Muridke.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="client-avatar"
                />
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
