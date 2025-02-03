import React from 'react';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Walcott University</h2>

        <div className="about-description">
          <p>
            Walcott University is a renowned institution dedicated to providing quality education and fostering a community of thinkers and innovators. Our mission is to empower students with the knowledge and skills to succeed in a rapidly changing world. Our vision is to be a global leader in education, shaping the future of tomorrow's leaders.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>Student Population</h3>
            <p>20,000+</p>
          </div>
          <div className="stat-card">
            <h3>Courses Offered</h3>
            <p>150+</p>
          </div>
          <div className="stat-card">
            <h3>Year Established</h3>
            <p>1985</p>
          </div>
        </div>

        <div className="about-map">
          <h3>Campus Map</h3>
          <p>
            Explore our campus with our interactive map or check out the location on Google Maps.
          </p>
          <a href="https://www.google.com/maps?q=Walcott+University" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Campus on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
