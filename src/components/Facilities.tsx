import React, { useState } from 'react';
import './Facilities.css';

const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const facilities = [
    {
      id: 1,
      name: "Science Laboratories",
      category: "academic",
      description: "Fully equipped Physics, Chemistry, and Biology laboratories with modern equipment and safety measures for hands-on learning experiences.",
      icon: "🧪",
      features: ["Modern Equipment", "Safety Measures", "Practical Learning", "Research Facilities"],
      image: "https://picsum.photos/seed/science-lab/400/300.jpg"
    },
    {
      id: 2,
      name: "Computer Lab",
      category: "academic",
      description: "State-of-the-art computer laboratory with high-speed internet, latest software, and individual workstations for each student.",
      icon: "💻",
      features: ["High-Speed Internet", "Latest Software", "Individual Workstations", "Technical Support"],
      image: "https://picsum.photos/seed/computer-lab/400/300.jpg"
    },
    {
      id: 3,
      name: "Library & Resource Center",
      category: "academic",
      description: "Extensive collection of books, journals, and digital resources with comfortable reading areas and research facilities.",
      icon: "📚",
      features: ["10,000+ Books", "Digital Resources", "Study Areas", "Research Facilities"],
      image: "https://picsum.photos/seed/library/400/300.jpg"
    },
    {
      id: 4,
      name: "Smart Classrooms",
      category: "academic",
      description: "Interactive classrooms equipped with smart boards, multimedia projectors, and modern teaching aids for enhanced learning.",
      icon: "🖥️",
      features: ["Smart Boards", "Multimedia Projectors", "Audio-Visual Aids", "Interactive Learning"],
      image: "https://picsum.photos/seed/smart-classroom/400/300.jpg"
    },
    {
      id: 5,
      name: "Sports Complex",
      category: "sports",
      description: "Comprehensive sports facilities including cricket ground, basketball court, football field, and indoor sports hall.",
      icon: "⚽",
      features: ["Cricket Ground", "Basketball Court", "Football Field", "Indoor Sports Hall"],
      image: "https://picsum.photos/seed/sports-complex/400/300.jpg"
    },
    {
      id: 6,
      name: "Swimming Pool",
      category: "sports",
      description: "Olympic-size swimming pool with trained instructors, safety measures, and separate changing facilities.",
      icon: "🏊",
      features: ["Olympic Size", "Trained Instructors", "Safety Measures", "Changing Facilities"],
      image: "https://picsum.photos/seed/swimming-pool/400/300.jpg"
    },
    {
      id: 7,
      name: "Prayer Hall (Masjid)",
      category: "religious",
      description: "Beautiful prayer hall with ablution facilities, separate areas for boys and girls, and Islamic environment.",
      icon: "🕌",
      features: ["Separate Areas", "Ablution Facilities", "Islamic Environment", "Daily Prayers"],
      image: "https://picsum.photos/seed/masjid/400/300.jpg"
    },
    {
      id: 8,
      name: "Cafeteria",
      category: "general",
      description: "Hygienic cafeteria serving nutritious meals and snacks with proper food safety standards and variety of options.",
      icon: "🍽️",
      features: ["Nutritious Meals", "Hygiene Standards", "Variety of Options", "Seating Area"],
      image: "https://picsum.photos/seed/cafeteria/400/300.jpg"
    },
    {
      id: 9,
      name: "Medical Room",
      category: "general",
      description: "Well-equipped medical room with qualified staff for immediate medical attention and health monitoring.",
      icon: "🏥",
      features: ["Qualified Staff", "First Aid", "Health Monitoring", "Emergency Care"],
      image: "https://picsum.photos/seed/medical-room/400/300.jpg"
    },
    {
      id: 10,
      name: "Art & Music Room",
      category: "academic",
      description: "Dedicated spaces for creative expression with art supplies, musical instruments, and performance areas.",
      icon: "🎨",
      features: ["Art Supplies", "Musical Instruments", "Performance Area", "Creative Expression"],
      image: "https://picsum.photos/seed/art-music/400/300.jpg"
    },
    {
      id: 11,
      name: "Playground",
      category: "sports",
      description: "Safe and engaging playground area for younger students with age-appropriate equipment and supervision.",
      icon: "🎠",
      features: ["Safe Equipment", "Age-Appropriate", "Supervised Area", "Fun Activities"],
      image: "https://picsum.photos/seed/playground/400/300.jpg"
    },
    {
      id: 12,
      name: "Auditorium",
      category: "general",
      description: "Spacious auditorium with modern sound system and seating for school events, assemblies, and performances.",
      icon: "🎭",
      features: ["Modern Sound System", "Spacious Seating", "Stage Facilities", "Event Hosting"],
      image: "https://picsum.photos/seed/auditorium/400/300.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Facilities', icon: '🏫' },
    { id: 'academic', name: 'Academic', icon: '📚' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'religious', name: 'Religious', icon: '🕌' },
    { id: 'general', name: 'General', icon: '🏢' }
  ];

  const filteredFacilities = selectedCategory === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.category === selectedCategory);

  return (
    <section className="facilities-section" id="facilities">
      <div className="background-decoration"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR FACILITIES</h2>
          <p className="section-subtitle">
            Explore our world-class infrastructure designed to provide the best learning environment for our students.
          </p>
        </div>

        <div className="category-filter">
          <h3 className="filter-title">Browse by Category</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="facilities-grid">
          {filteredFacilities.map((facility) => (
            <div key={facility.id} className="facility-card">
              <div className="facility-image">
                <img src={facility.image} alt={facility.name} />
                <div className="facility-icon-overlay">
                  <span className="facility-icon">{facility.icon}</span>
                </div>
              </div>
              <div className="facility-content">
                <h3 className="facility-name">{facility.name}</h3>
                <p className="facility-description">{facility.description}</p>
                <div className="facility-features">
                  <h4>Key Features:</h4>
                  <div className="features-list">
                    {facility.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                <button className="explore-btn">Explore Facility</button>
              </div>
            </div>
          ))}
        </div>

        <div className="facilities-highlights">
          <h3 className="subsection-title">Campus Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-number">12+</div>
              <div className="highlight-text">Acres Campus</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">50+</div>
              <div className="highlight-text">Classrooms</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-text">Power Backup</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">24/7</div>
              <div className="highlight-text">Security</div>
            </div>
          </div>
        </div>

        <div className="virtual-tour">
          <h3 className="subsection-title">Experience Our Campus</h3>
          <div className="tour-container">
            <div className="tour-content">
              <h4>Virtual Campus Tour</h4>
              <p>Take a virtual tour of our beautiful campus and explore all our facilities from the comfort of your home.</p>
              <button className="tour-btn">Start Virtual Tour</button>
            </div>
            <div className="tour-image">
              <img src="https://picsum.photos/seed/campus-aerial/600/400.jpg" alt="Campus Aerial View" />
            </div>
          </div>
        </div>

        <div className="safety-section">
          <h3 className="subsection-title">Safety & Security</h3>
          <div className="safety-grid">
            <div className="safety-item">
              <div className="safety-icon">🔒</div>
              <h4>24/7 Security</h4>
              <p>Trained security personnel and CCTV surveillance throughout the campus</p>
            </div>
            <div className="safety-item">
              <div className="safety-icon">🚑</div>
              <h4>Medical Facilities</h4>
              <p>On-site medical room with qualified staff for immediate care</p>
            </div>
            <div className="safety-item">
              <div className="safety-icon">🚌</div>
              <h4>Transport Safety</h4>
              <p>GPS-tracked buses with trained drivers and conductors</p>
            </div>
            <div className="safety-item">
              <div className="safety-icon">🌡️</div>
              <h4>Fire Safety</h4>
              <p>Modern fire detection and suppression systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
