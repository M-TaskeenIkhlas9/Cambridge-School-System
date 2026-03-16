import React from 'react';
import './CanDoLearner.css';

const CanDoLearner: React.FC = () => {
  const learnerQualities = [
    {
      icon: '🧠',
      title: 'Critical Thinker',
      description: 'Develops problem-solving skills and analytical thinking',
    },
    {
      icon: '🎯',
      title: 'Goal Oriented',
      description: 'Sets and achieves academic and personal goals',
    },
    {
      icon: '💪',
      title: 'Resilient',
      description: 'Overcomes challenges and learns from mistakes',
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'Works well with others and communicates effectively',
    },
  ];

  return (
    <section className="can-do-learner" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            WHAT IS A <span className="highlight">CAMBRIDGE STUDENT</span>?
          </h2>
          <p className="section-description">
            A Cambridge Student is a confident, capable learner who embraces challenges and believes in their ability to succeed. 
            Through our proven methods, we help children develop the mindset and skills needed to become lifelong learners.
          </p>
        </div>
        
        <div className="content-grid">
          <div className="image-section">
            <div className="mountain-image">
              <img 
                src="https://picsum.photos/seed/cambridge-campus/600/400.jpg" 
                alt="Cambridge School Campus representing achievement" 
              />
            </div>
          </div>
          
          <div className="qualities-section">
            <div className="qualities-grid">
              {learnerQualities.map((quality, index) => (
                <div key={index} className="quality-card">
                  <div className="quality-icon-wrapper">
                    <div className="quality-icon">{quality.icon}</div>
                  </div>
                  <div className="quality-content">
                    <h3 className="quality-title">{quality.title}</h3>
                    <p className="quality-description">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanDoLearner;
