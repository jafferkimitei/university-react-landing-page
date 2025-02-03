import React from 'react';
import './ProgramsAndCoursesSection.scss';

const ProgramsAndCoursesSection = () => {
  return (
    <section className="programs-courses">
      <div className="programs-courses-content">
        <h2 className="section-title">Programs & Courses</h2>

        <div className="featured-programs">
          <h3 className="section-subtitle">Featured Programs</h3>
          <div className="programs-list">
            <div className="program-card">
              <h4>Computer Science</h4>
              <p>Explore the fundamentals of computer programming, AI, and data science.</p>
              <a href="/programs/computer-science" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="program-card">
              <h4>Business Administration</h4>
              <p>Prepare for leadership roles in business with a comprehensive understanding of management, finance, and marketing.</p>
              <a href="/programs/business-administration" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="program-card">
              <h4>Mechanical Engineering</h4>
              <p>Get hands-on experience with design, manufacturing, and maintenance of mechanical systems.</p>
              <a href="/programs/mechanical-engineering" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="course-highlights">
          <h3 className="section-subtitle">Course Highlights</h3>
          <p>
            Our courses are designed to provide students with a deep understanding of their chosen field, along with practical skills that make them ready for the workforce. With strong departments in engineering, business, and computer science, our academic programs are known for their excellence and innovation.
          </p>
          <p>
            We emphasize research, hands-on experience, and collaborative learning. Our students graduate with not only the knowledge but also the problem-solving skills to thrive in their careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndCoursesSection;
