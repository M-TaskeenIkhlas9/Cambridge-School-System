import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ScrollToTop from './ScrollToTop';

// Page Components
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
