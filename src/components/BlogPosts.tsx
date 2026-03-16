import React, { useState } from 'react';
import './BlogPosts.css';

const BlogPosts: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Child Needs a Tutor",
      excerpt: "Learn to recognize the indicators that your child might benefit from additional academic support and personalized tutoring.",
      image: "https://picsum.photos/seed/tutoring-signs/400/250.jpg",
      date: "March 15, 2024",
      category: "Parenting Tips",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      content: `
        <h3>Recognizing When Your Child Needs Extra Help</h3>
        <p>As parents, we want the best for our children's education. But sometimes it's hard to tell if they're struggling or just going through a normal learning phase. Here are five key signs that indicate your child might benefit from tutoring:</p>
        
        <h4>1. Declining Grades</h4>
        <p>If you notice a consistent drop in your child's grades, especially in subjects they previously excelled in, it might be time to consider additional support.</p>
        
        <h4>2. Homework Struggles</h4>
        <p>When homework becomes a daily battle and takes hours to complete, it could indicate that your child is missing fundamental concepts.</p>
        
        <h4>3. Lack of Confidence</h4>
        <p>Children who constantly say "I'm stupid" or "I can't do this" may be struggling with self-esteem issues related to academic performance.</p>
        
        <h4>4. Teacher Feedback</h4>
        <p>If teachers are expressing concerns about your child's progress or behavior in class, take their observations seriously.</p>
        
        <h4>5. Avoidance Behavior</h4>
        <p>Children who go to great lengths to avoid school work or discussions about their grades may be struggling silently.</p>
        
        <p>Remember, seeking help early can prevent larger academic problems later. A good tutor can not only help with grades but also rebuild confidence and create positive learning habits.</p>
      `
    },
    {
      id: 2,
      title: "Building Study Skills for Success",
      excerpt: "Discover effective strategies and techniques to help your child develop strong study habits that will last a lifetime.",
      image: "https://picsum.photos/seed/study-skills/400/250.jpg",
      date: "March 10, 2024",
      category: "Study Skills",
      readTime: "7 min read",
      author: "Prof. Michael Chen",
      content: `
        <h3>Essential Study Skills Every Student Needs</h3>
        <p>Strong study skills are the foundation of academic success. Unlike innate intelligence, study habits can be learned and improved with practice. Here's how to help your child develop effective study techniques:</p>
        
        <h4>Time Management</h4>
        <p>Teach your child to break large assignments into smaller, manageable tasks. Use planners or digital apps to track deadlines and create study schedules.</p>
        
        <h4>Note-Taking Strategies</h4>
        <p>Introduce different note-taking methods like Cornell notes, mind mapping, or outline formats. Encourage reviewing notes within 24 hours for better retention.</p>
        
        <h4>Active Learning</h4>
        <p>Passive reading isn't enough. Teach your child to engage with material through summarizing, questioning, and teaching concepts to others.</p>
        
        <h4>Study Environment</h4>
        <p>Create a dedicated study space free from distractions. Ensure good lighting, comfortable seating, and all necessary supplies are within reach.</p>
        
        <h4>Regular Review</h4>
        <p>Cramming is ineffective. Encourage daily review of material, even for just 15-20 minutes, to reinforce learning and reduce test anxiety.</p>
        
        <p>Remember, building good study habits takes time and consistency. Celebrate small victories and remain patient as your child develops these crucial skills.</p>
      `
    },
    {
      id: 3,
      title: "Understanding Learning Styles",
      excerpt: "Explore different learning styles and how to identify which approach works best for your child's unique needs.",
      image: "https://picsum.photos/seed/learning-styles/400/250.jpg",
      date: "March 5, 2024",
      category: "Education",
      readTime: "6 min read",
      author: "Dr. Emily Rodriguez",
      content: `
        <h3>Finding Your Child's Learning Style</h3>
        <p>Every child learns differently. Understanding your child's learning style can help you support their education more effectively. Here are the main learning styles and how to identify them:</p>
        
        <h4>Visual Learners</h4>
        <p>These children learn best through seeing. They benefit from diagrams, charts, videos, and written instructions. They often remember faces but forget names and prefer visual demonstrations.</p>
        
        <h4>Auditory Learners</h4>
        <p>Auditory learners learn through listening. They benefit from discussions, audiobooks, and verbal explanations. They often talk to themselves and remember information they've heard.</p>
        
        <h4>Kinesthetic Learners</h4>
        <p>These children learn through doing and moving. They benefit from hands-on activities, experiments, and physical engagement with material.</p>
        
        <h4>Reading/Writing Learners</h4>
        <p>These learners prefer to interact with text. They benefit from reading, writing, taking notes, and working with lists and diagrams.</p>
        
        <h4>Mixed Learning Styles</h4>
        <p>Most children use a combination of learning styles. Observe how your child naturally approaches new information and adapt your support accordingly.</p>
        
        <p>The key is flexibility. While understanding learning styles is helpful, don't limit your child to one approach. The most successful learners can adapt to different situations and use multiple learning methods.</p>
      `
    }
  ];

  const handleReadMore = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const selectedBlogPost = blogPosts.find(post => post.id === selectedPost);

  return (
    <section className="blog-posts-section" id="blog">
      <div className="container">
        <h2 className="section-title">FEATURED BLOG POSTS</h2>
        <p className="section-subtitle">
          Expert insights, tips, and resources to support your child's educational journey.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
                <div className="blog-meta-overlay">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-author">By {post.author}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button 
                  className="read-more" 
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedBlogPost && (
        <div className="blog-modal-overlay" onClick={handleCloseModal}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedBlogPost.title}</h2>
              <button className="close-modal" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-meta">
              <span className="modal-category">{selectedBlogPost.category}</span>
              <span className="modal-date">{selectedBlogPost.date}</span>
              <span className="modal-read-time">{selectedBlogPost.readTime}</span>
              <span className="modal-author">By {selectedBlogPost.author}</span>
            </div>
            <div className="modal-image">
              <img src={selectedBlogPost.image} alt={selectedBlogPost.title} />
            </div>
            <div 
              className="modal-content"
              dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
            />
            <div className="modal-footer">
              <button className="back-button" onClick={handleCloseModal}>
                ← Back to Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPosts;
