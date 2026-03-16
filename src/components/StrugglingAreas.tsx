import React from 'react';
import './StrugglingAreas.css';

const StrugglingAreas: React.FC = () => {
  const areas = [
    {
      icon: "📚",
      title: "Reading Comprehension",
      description: "Difficulty understanding and retaining reading material",
      color: "#FF6B6B",
      bgColor: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
    },
    {
      icon: "🔢",
      title: "Math Concepts",
      description: "Struggling with mathematical reasoning and problem-solving",
      color: "#4ECDC4",
      bgColor: "linear-gradient(135deg, #4ECDC4 0%, #6EE7DF 100%)"
    },
    {
      icon: "✍️",
      title: "Writing Skills",
      description: "Challenges in organizing thoughts and expressing ideas",
      color: "#45B7D1",
      bgColor: "linear-gradient(135deg, #45B7D1 0%, #6DD5ED 100%)"
    },
    {
      icon: "⏰",
      title: "Time Management",
      description: "Difficulty completing assignments and managing deadlines",
      color: "#96CEB4",
      bgColor: "linear-gradient(135deg, #96CEB4 0%, #B4E7CE 100%)"
    },
    {
      icon: "🧩",
      title: "Focus & Attention",
      description: "Trouble concentrating and staying on task",
      color: "#FFEAA7",
      bgColor: "linear-gradient(135deg, #FFEAA7 0%, #FFF3C7 100%)"
    },
    {
      icon: "🗣️",
      title: "Communication",
      description: "Challenges in expressing thoughts and participating in class",
      color: "#DDA0DD",
      bgColor: "linear-gradient(135deg, #DDA0DD 0%, #E8C4E8 100%)"
    }
  ];

  return (
    <section className="struggling-areas">
      <div className="container">
        <h2 className="section-title animate-fadeIn">WHERE IS YOUR CHILD STRUGGLING IN SCHOOL?</h2>
        <p className="section-subtitle animate-fadeIn delay-200">
          We understand that every child faces unique challenges. 
          Our experienced faculty are trained to help with specific areas of difficulty.
        </p>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="area-card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="area-icon-wrapper" style={{ background: area.bgColor }}>
                <div className="area-icon">{area.icon}</div>
              </div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>
              <div className="card-decoration" style={{ backgroundColor: area.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrugglingAreas;
