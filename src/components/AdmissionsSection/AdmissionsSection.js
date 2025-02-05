import React from 'react';
import './AdmissionsSection.scss';

const AdmissionsSection = () => {
  return (
    <section className="admissions">
      <div className="admissions-content">
        <h2 className="section-title">Admissions</h2>

        <div className="admissions-grid">
          {/* Left Column: Application Process */}
          <div className="application-process">
            <h3 className="section-subtitle">Application Process</h3>
            <ul className="process-steps">
              <li><strong>Step 1:</strong> Complete the online application form on our website.</li>
              <li><strong>Step 2:</strong> Submit required academic transcripts and documents.</li>
              <li><strong>Step 3:</strong> Submit your personal statement or motivation letter.</li>
              <li><strong>Step 4:</strong> Provide letters of recommendation (if required).</li>
              <li><strong>Step 5:</strong> Attend an interview (for selected candidates).</li>
              <li><strong>Step 6:</strong> Receive admission decision and final instructions.</li>
            </ul>
            <p className="application-deadline">
              <strong>Application Deadline:</strong> <a href="#">Click here to view deadlines</a>
            </p>
          </div>

          {/* Right Column: Tuition & Fees + Admission Requirements */}
          <div className="right-column">
            <div className="tuition-fees">
              <h3 className="section-subtitle">Tuition & Fees</h3>
              <p>
                Our tuition fees vary by program. For a detailed breakdown of tuition costs, please
                visit the full tuition page. Financial aid options are available for eligible students.
              </p>
              <p>
                <strong>Financial Aid:</strong> Scholarships and grants are available. For more
                information, visit our <a href="#">financial aid page</a>.
              </p>
            </div>

            <div className="admission-requirements">
              <h3 className="section-subtitle">Admission Requirements</h3>
              <ul className="requirements-list">
                <li>Minimum GPA of 3.0 (on a 4.0 scale) or equivalent</li>
                <li>Extracurricular involvement (clubs, sports, volunteer work, etc.)</li>
                <li>Relevant standardized test scores (if required)</li>
                <li>Proof of English language proficiency (for international students)</li>
                <li>Completed application form with required documents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
