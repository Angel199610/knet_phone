import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTiktok, faYoutube, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  console.log('Rendering Footer');

  return (
    <footer className="footer">
      <p className="footer-info">FIND US AT KOJJA SHARIF</p>
      <div className="footer-content">
        <div className="footer-section social-media">
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://twitter.com/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.tiktok.com/" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a></li>
            <li><a href="https://www.youtube.com/" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li><a href="https://www.snapchat.com/" aria-label="Snapchat"><FontAwesomeIcon icon={faSnapchatGhost} /></a></li>
          </ul>
          
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Find us at:</p>
          <address>
            Namirembe Road,<br />
            Kampala, Uganda
          </address>
          <p>Tel: <a href="tel:+256709717910">+256 709717910</a></p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} K-net. All rights reserved.</p>
        <p>Available 24/7 online</p>
      </div>
    </footer>
  );
};

console.log('Footer component loaded');

export default Footer;