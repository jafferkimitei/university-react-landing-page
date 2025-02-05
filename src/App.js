// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProgramsAndCoursesSection from './components/ProgramsAndCoursesSection/ProgramsAndCoursesSection';
import StudentLifeSection from './components/StudentLifeSection/StudentLifeSection';
import AdmissionsSection from './components/AdmissionsSection/AdmissionsSection';
import NewsEventsSection from './components/NewsEventsSection/NewsEventsSection';
import ContactSection from './components/ContactSection/ContactSection';
import FooterSection from './components/FooterSection/FooterSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsAndCoursesSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <NewsEventsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default App;
