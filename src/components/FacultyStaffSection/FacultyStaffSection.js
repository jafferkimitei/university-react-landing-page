import React from 'react';
import './FacultyStaffSection.scss';

const FacultyStaffSection = () => {
  return (
    <section className="faculty-staff">
      <div className="faculty-staff-content">
        <h2 className="section-title">Faculty & Staff</h2>

        <div className="faculty-showcase">
          <h3 className="section-subtitle">Featured Faculty Members</h3>
          <div className="faculty-list">
            <div className="faculty-member">
              <img src="https://via.placeholder.com/150" alt="Faculty 1" className="faculty-photo" />
              <h4 className="faculty-name">Dr. Jane Doe</h4>
              <p className="faculty-role">Professor of Computer Science</p>
              <p className="faculty-bio">Dr. Jane Doe has over 20 years of experience in teaching computer science. Her research focuses on artificial intelligence and machine learning.</p>
            </div>

            <div className="faculty-member">
              <img src="https://via.placeholder.com/150" alt="Faculty 2" className="faculty-photo" />
              <h4 className="faculty-name">Prof. John Smith</h4>
              <p className="faculty-role">Head of the Department of Mathematics</p>
              <p className="faculty-bio">Prof. John Smith has been a part of the university for 15 years and is a renowned expert in applied mathematics and statistics.</p>
            </div>

            <div className="faculty-member">
              <img src="https://via.placeholder.com/150" alt="Faculty 3" className="faculty-photo" />
              <h4 className="faculty-name">Dr. Emily Brown</h4>
              <p className="faculty-role">Associate Professor of English Literature</p>
              <p className="faculty-bio">Dr. Emily Brown specializes in 19th-century literature and has published several papers on Victorian novels.</p>
            </div>
          </div>
        </div>

        <div className="contact-faculty">
          <h3 className="section-subtitle">Contact Faculty</h3>
          <p>If you need to contact any faculty member, please reach out directly or visit their departmental page for more details.</p>
          <ul className="contact-links">
            <li><a href="#">Department of Computer Science</a></li>
            <li><a href="#">Department of Mathematics</a></li>
            <li><a href="#">Department of English Literature</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FacultyStaffSection;
