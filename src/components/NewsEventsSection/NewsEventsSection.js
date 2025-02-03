import React from 'react';
import './NewsEventsSection.scss';

const NewsEventsSection = () => {
  return (
    <section className="news-events">
      <div className="news-events-content">
        <h2 className="section-title">News & Events</h2>

        <div className="upcoming-events">
          <h3 className="section-subtitle">Upcoming Events</h3>
          <ul className="events-list">
            <li className="event-item">
              <h4 className="event-name">Admissions Deadline</h4>
              <p className="event-date">March 15, 2025</p>
              <p className="event-description">The deadline for submitting your application for the fall semester.</p>
              <a href="/admissions" className="event-link">Learn More</a>
            </li>
            <li className="event-item">
              <h4 className="event-name">Annual Open House</h4>
              <p className="event-date">April 5, 2025</p>
              <p className="event-description">Join us for a campus tour and Q&A session with faculty and staff.</p>
              <a href="/open-house" className="event-link">RSVP Now</a>
            </li>
            <li className="event-item">
              <h4 className="event-name">Public Lecture on Artificial Intelligence</h4>
              <p className="event-date">May 10, 2025</p>
              <p className="event-description">A guest lecture by Dr. Smith on the future of AI in education.</p>
              <a href="/events" className="event-link">Register Here</a>
            </li>
          </ul>
        </div>

        <div className="news">
          <h3 className="section-subtitle">Recent News</h3>
          <ul className="news-list">
            <li className="news-item">
              <h4 className="news-title">University Ranked Among Top 10 in the Nation</h4>
              <p className="news-summary">Our university has been ranked among the top 10 institutions for research in computer science, according to the National Research Foundation.</p>
              <a href="/news/top-10-ranking" className="news-link">Read More</a>
            </li>
            <li className="news-item">
              <h4 className="news-title">New Research Center for Climate Change Established</h4>
              <p className="news-summary">A new research center focused on climate change and sustainability has been launched at our campus, with support from the government and local organizations.</p>
              <a href="/news/climate-change-center" className="news-link">Read More</a>
            </li>
            <li className="news-item">
              <h4 className="news-title">Alumni Breakthrough in Medical Research</h4>
              <p className="news-summary">One of our alumni has made groundbreaking contributions to cancer research, presenting new insights into potential treatments.</p>
              <a href="/news/alumni-breakthrough" className="news-link">Read More</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
