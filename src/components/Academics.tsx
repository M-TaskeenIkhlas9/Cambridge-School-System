import React, { useState } from 'react';
import './Academics.css';

const Academics: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      title: "Primary School",
      age: "5-11 years",
      description: "Building strong foundations in literacy, numeracy, and critical thinking through interactive learning.",
      subjects: ["English", "Mathematics", "Science", "Islamic Studies", "Urdu", "Computer Studies"],
      icon: "📚"
    },
    {
      title: "Middle School",
      age: "11-14 years",
      description: "Developing advanced academic skills and preparing students for higher education challenges.",
      subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Islamic Studies", "Urdu", "Computer Studies"],
      icon: "🔬"
    },
    {
      title: "Matriculation",
      age: "14-16 years",
      description: "Comprehensive Matric preparation with focus on academic excellence and character building.",
      subjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology", "Pakistan Studies", "Islamic Studies", "Urdu"],
      icon: "🎓"
    }
  ];

  const highlights = [
    { value: "500", label: "Active Students" },
    { value: "100%", label: "Board Results" },
    { value: "25", label: "Teachers (Pakistani Muslims)" },
    { value: "15+", label: "Years of Excellence" }
  ];

  const facilities = [
    {
      name: "Science Laboratories",
      description: "Fully equipped labs for Physics, Chemistry, and Biology experiments",
      icon: "🧪"
    },
    {
      name: "Computer Lab",
      description: "Modern computer facilities with high-speed internet and educational software",
      icon: "💻"
    },
    {
      name: "Library",
      description: "Extensive collection of books, journals, and digital resources",
      icon: "📖"
    },
    {
      name: "Smart Classrooms",
      description: "Interactive whiteboards and multimedia learning tools",
      icon: "🖥️"
    }
  ];

  return (
    <section className="academics-section" id="academics">
      <div className="background-pattern"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ACADEMIC EXCELLENCE</h2>
          <p className="section-subtitle">
            Discover our comprehensive academic programs designed to nurture young minds and prepare them for future success.
          </p>
        </div>

        <div className="programs-container">
          <h3 className="subsection-title">Academic Programs</h3>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <span className="program-age">{program.age}</span>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>

                <div className="subjects-list">
                  <h5>Core Subjects</h5>
                  <div className="subjects">
                    {program.subjects.map((subject) => (
                      <span key={subject} className="subject-tag">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="learn-more-btn"
                  onClick={() => setSelectedProgram(program.title)}
                >
                  View Program Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="academic-highlights">
          <h3 className="subsection-title">Academic Highlights</h3>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-number">{item.value}</div>
                <div className="highlight-text">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="learning-approach">
          <h3 className="subsection-title">Our Teaching Approach</h3>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">🎯</div>
              <h4>Student-Centered Learning</h4>
              <p>Personalized attention to each student's learning style and pace</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🌟</div>
              <h4>Character Building</h4>
              <p>Integration of Islamic values and moral education in all subjects</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🚀</div>
              <h4>Modern Pedagogy</h4>
              <p>Latest teaching methods and educational technology integration</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🏆</div>
              <h4>Excellence Focus</h4>
              <p>Rigorous academic standards with continuous assessment</p>
            </div>
          </div>
        </div>

        <div className="academic-facilities">
          <h3 className="subsection-title">Academic Facilities</h3>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h4>{facility.name}</h4>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedProgram && (
          <div className="academics-modal-backdrop" onClick={() => setSelectedProgram(null)}>
            <div
              className="academics-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="modal-title">{selectedProgram} – Sample Day</h3>
              <p className="modal-subtitle">
                Here is an example of how a typical school day is structured for this program.
              </p>
              <ul className="modal-timetable">
                <li>
                  <span className="time">08:00 – 08:30</span>
                  <span className="subject">Assembly &amp; Registration</span>
                </li>
                <li>
                  <span className="time">08:30 – 09:15</span>
                  <span className="subject">English / Language</span>
                </li>
                <li>
                  <span className="time">09:15 – 10:00</span>
                  <span className="subject">Mathematics</span>
                </li>
                <li>
                  <span className="time">10:00 – 10:30</span>
                  <span className="subject">Break &amp; Refreshments</span>
                </li>
                <li>
                  <span className="time">10:30 – 11:15</span>
                  <span className="subject">Science / Lab Activity</span>
                </li>
                <li>
                  <span className="time">11:15 – 12:00</span>
                  <span className="subject">Islamic Studies / character building</span>
                </li>
                <li>
                  <span className="time">12:00 – 12:45</span>
                  <span className="subject">ICT / Project Work</span>
                </li>
              </ul>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Academics;
