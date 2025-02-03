// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Walcott University</h1>
        <p className="hero-subtitle">Where Your Future Begins</p>
        <div className="hero-buttons">
          <a href="#apply" className="btn btn-primary">Apply Now</a>
          <a href="#programs" className="btn btn-secondary">Explore Programs</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
