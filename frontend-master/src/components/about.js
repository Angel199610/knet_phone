import React from 'react';
import '../styles/about.css';

// Sample team member images
import teamMember1 from '../components/images/man 1.jpg'; // Make sure to replace with actual paths to your images
import teamMember2 from '../components/images/man.jpg';
import teamMember3 from '../components/images/woman.jpg';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>

      {/* Vision, Mission, and Values Section */}
      <div className="vision-mission-values">
        <div className="vision-mission-values-grid">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To be the leading provider of the latest gadgets and tech accessories in the region, empowering people through technology.
            </p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To offer innovative and top-quality products that make life easier, smarter, and more enjoyable for our customers.
            </p>
          </div>
          <div className="card">
            <h3>Our Values</h3>
            <p>
              We believe in providing excellent customer service, innovation, quality, and commitment to our customers and partners.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="team-grid-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamMember1} alt="Team Member 1" />
            <p>KOJJA SHARIF - CEO</p>
            <p>Tel: +256 790 890 678</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Team Member 2" />
            <p>KIBUMBA PHILEX - CTO</p>
            <p>Tel: +256 785 209 757</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Team Member 3" />
            <p>KAHUNDE RHONAH - COO</p>
            <p>Tel: +256 700 456 678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;