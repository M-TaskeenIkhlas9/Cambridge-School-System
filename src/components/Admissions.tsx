import React, { useState } from 'react';
import './Admissions.css';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    previousSchool: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admission form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon with the next steps.');
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      previousSchool: '',
      message: ''
    });
  };

  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out the online application form with required details",
      icon: "📝"
    },
    {
      step: 2,
      title: "Entrance Test",
      description: "Student appears for the entrance assessment test",
      icon: "📋"
    },
    {
      step: 3,
      title: "Interview",
      description: "Parent and student interview with the admission committee",
      icon: "👥"
    },
    {
      step: 4,
      title: "Admission Offer",
      description: "Receive admission decision and complete enrollment",
      icon: "🎉"
    }
  ];

  const requirements = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Transcript/Report Card",
    "Parent/Guardian CNIC copies",
    "4 recent passport-size photographs",
    "Medical fitness certificate",
    "Character certificate (if applicable)"
  ];

  return (
    <section className="admissions-section" id="admissions">
      <div className="background-gradient"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ADMISSIONS</h2>
          <p className="section-subtitle">
            Join our prestigious institution and give your child the gift of quality education in a nurturing Islamic environment.
          </p>
        </div>

        <div className="admissions-layout">
          <div className="admissions-left">
            <div className="admission-overview">
              <div className="overview-content">
                <h3 className="subsection-title">Why Choose Cambridge?</h3>
                <p className="overview-intro">
                  Families choose The Cambridge School System for its balanced blend of strong academics,
                  Islamic values, and a warm, caring environment.
                </p>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">🏆</div>
                    <h4>Academic Excellence</h4>
                    <p>Proven track record of outstanding O-Level results</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🌟</div>
                    <h4>Islamic Values</h4>
                    <p>Strong emphasis on moral and character development</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">👨‍🏫</div>
                    <h4>Expert Faculty</h4>
                    <p>Highly qualified and experienced teaching staff</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🏫</div>
                    <h4>Modern Facilities</h4>
                    <p>State-of-the-art infrastructure and learning resources</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🤝</div>
                    <h4>Parent Partnership</h4>
                    <p>Regular communication, meetings, and progress updates for families</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🎨</div>
                    <h4>Holistic Development</h4>
                    <p>Co‑curricular activities that build confidence, creativity, and leadership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="admission-process">
              <h3 className="subsection-title">Admission Journey</h3>
              <div className="process-timeline">
                {admissionSteps.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <div className="step-icon">{step.icon}</div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="requirements-section">
              <h3 className="subsection-title">Required Documents</h3>
              <div className="requirements-list">
                {requirements.map((req, index) => (
                  <div key={index} className="requirement-item">
                    <div className="check-icon">✓</div>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admissions-right">
            <div className="admission-form-section">
              <h3 className="subsection-title">Apply for Admission</h3>
              <p className="form-subtitle">
                Share a few details with us and our admission team will contact you with the next steps.
              </p>
              <div className="form-container">
                <form onSubmit={handleSubmit} className="admission-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="studentName">Student Name *</label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parentName">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Enter parent/guardian name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
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
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92-321-1234567"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="grade">Applying for Grade *</label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Grade</option>
                        <option value="nursery">Nursery</option>
                        <option value="kg1">KG-1</option>
                        <option value="kg2">KG-2</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Matric</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="previousSchool">Previous School</label>
                      <input
                        type="text"
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Previous school name (if applicable)"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any special requirements or questions..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

            <div className="contact-info">
              <h3 className="subsection-title">Admission Office</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>The Cambridge School System Muridke<br/>Main Boulevard, Muridke<br/>Punjab, Pakistan</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+92-321-1234567<br/>+92-42-3456789</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>admissions@cambridgemuridke.edu.pk<br/>info@cambridgemuridke.edu.pk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
