import React from 'react';
import './Tutors.css';

const Tutors: React.FC = () => {
  const tutors = [
    {
      name: "Ayesha Malik",
      role: "Math Specialist",
      image: "https://picsum.photos/seed/sarah/200/200.jpg",
      bio: "10+ years experience in mathematics education"
    },
    {
      name: "Muhammad Bilal",
      role: "Reading & Writing Coach",
      image: "https://picsum.photos/seed/michael/200/200.jpg",
      bio: "Expert in literacy development and creative writing"
    },
    {
      name: "Fatima Zahra",
      role: "Science Tutor",
      image: "https://picsum.photos/seed/emily/200/200.jpg",
      bio: "Passionate about making science engaging and accessible"
    },
    {
      name: "Bilal Ahmad",
      role: "Study Skills Coach",
      image: "https://picsum.photos/seed/david/200/200.jpg",
      bio: "Specializes in executive functioning and organization"
    }
  ];

  return (
    <section className="tutors-section" id="tutors">
      <div className="container">
        <h2 className="section-title">MEET OUR TUTORS & COACHES</h2>
        <p className="section-subtitle">
          Our team of experienced educators is dedicated to helping your child succeed.
        </p>
        
        <div className="tutors-grid">
          {tutors.map((tutor, index) => (
            <div key={index} className="tutor-card">
              <div className="tutor-image">
                <img src={tutor.image} alt={tutor.name} />
              </div>
              <div className="tutor-info">
                <h3 className="tutor-name">{tutor.name}</h3>
                <p className="tutor-role">{tutor.role}</p>
                <p className="tutor-bio">{tutor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;
