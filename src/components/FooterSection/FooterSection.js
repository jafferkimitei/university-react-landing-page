import React, { useState } from 'react';
import './FooterSection.scss';

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    alert('Subscribed with email: ' + email);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="links-list">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
        </div>

        <div className="newsletter-signup">
          <h3 className="footer-title">Subscribe for Updates</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
