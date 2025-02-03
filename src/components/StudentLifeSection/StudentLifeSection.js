import React from 'react';
import './StudentLifeSection.scss';

const StudentLifeSection = () => {
  return (
    <section className="student-life">
      <div className="student-life-content">
        <h2 className="section-title">Student Life</h2>

        <div className="campus-activities">
          <h3 className="section-subtitle">Campus Activities</h3>
          <ul className="activities-list">
            <li>Sports Teams (Football, Basketball, etc.)</li>
            <li>Drama and Music Clubs</li>
            <li>Student Government & Leadership Programs</li>
            <li>Community Service and Volunteer Programs</li>
            <li>Tech and Innovation Clubs</li>
          </ul>
        </div>

        <div className="testimonials">
          <h3 className="section-subtitle">What Students Say</h3>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>
                "Being a part of the drama club has been an amazing experience. It allowed me to express my creativity and bond with like-minded students."
              </p>
              <span>- Anna, Class of 2024</span>
            </div>
            <div className="testimonial-card">
              <p>
                "The student government gave me a chance to develop leadership skills and make a difference on campus. It's been incredibly rewarding!"
              </p>
              <span>- John, Class of 2023</span>
            </div>
            <div className="testimonial-card">
              <p>
                "The tech club is where I found my passion for programming. We've built amazing projects together and created a strong community."
              </p>
              <span>- Sarah, Class of 2022</span>
            </div>
          </div>
        </div>

        <div className="gallery">
          <h3 className="section-subtitle">Campus Gallery</h3>
          <div className="gallery-images">
            <img src="/images/campus1.jpg" alt="Campus View" className="gallery-image" />
            <img src="/images/campus2.jpg" alt="Campus Event" className="gallery-image" />
            <img src="/images/dorms.jpg" alt="Student Dorms" className="gallery-image" />
            <img src="/images/event.jpg" alt="Campus Festival" className="gallery-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
