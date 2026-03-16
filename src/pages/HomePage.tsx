import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import CanDoLearner from '../components/CanDoLearner';
import StrugglingAreas from '../components/StrugglingAreas';
import ContactForm from '../components/ContactForm';
import Tutors from '../components/Tutors';
import Testimonials from '../components/Testimonials';
import BlogPosts from '../components/BlogPosts';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <CanDoLearner />
      <StrugglingAreas />
      <ContactForm />
      <Tutors />
      <Testimonials />
      <BlogPosts />
    </main>
  );
};

export default HomePage;
