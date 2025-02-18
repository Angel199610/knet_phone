import React from 'react';
import repairImage from '../components/images/repair.jpg';
import accessoriesImage from '../components/images/accessories.jpg';
import softwareUpdateImage from '../components/images/software.jpg';
import sellingPhonesImage from '../components/images/phone1.jpg'; // Import the new image
import buyingPhonesImage from '../components/images/buy2.jpg';
import offeringhonesImage from '../components/images/buy3.avif';
import customhonesImage from '../components/images/custom.jpg';
import insuImage from '../components/images/insu.avif';
// import '../styles/home.css'



const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-text">Dealers in Japanese Phones</h1>
      </div>
      <div className="services-section">
        <h1 className="services-heading">OUR SERVICES</h1>
        <p className="services-description">
          We offer services like phone repair, deal in accessories, provide software updates, and sell phones.
        </p>
        <div className="service-container">
          <div className="service">
            <img src={sellingPhonesImage} alt="Selling Phones" className="service-image" />
            <h3>Selling Phones</h3>
            <p>Wide range of new and refurbished phones for sale.</p>
          </div>
          <div className="service">
            <img src={repairImage} alt="Phone Repair" className="service-image" />
            <h3>Phone Repair</h3>
            <p>Professional repair services for all phone models.</p>
          </div>
          <div className="service">
            <img src={accessoriesImage} alt="Phone Accessories" className="service-image" />
            <h3>Accessories</h3>
            <p>High-quality accessories for your phone.</p>
          </div>
          <div className="service">
            <img src={softwareUpdateImage} alt="Software Updates" className="service-image" />
            <h3>Software Update</h3>
            <p>Get the latest software updates for your phone.</p>
          </div>
          <div className="service">
            <img src={buyingPhonesImage} alt="Software Updates" className="service-image" />
            <h3>Trade-In/Buyback Programs:</h3>
            <p>Exchange old phones for credit towards a new purchase 
              Recycle your phone to us for a new one..</p>
          </div>
          <div className="service">
            <img src={offeringhonesImage} alt="Software Updates" className="service-image" />
            <h3>Phone Rentals::</h3>
            <p>Offering phones for businesses that need short-term devices for employees.</p>
          </div>
          <div className="service">
            <img src={customhonesImage} alt="Software Updates" className="service-image" />
            <h3>Customized Services</h3>
            <p>Offering personalized skins, decals, or stickers for phones.
            Phone Engraving: Laser engraving for custom designs or names</p>
          </div>
          <div className="service">
            <img src={insuImage} alt="Software Updates" className="service-image" />
            <h3>Phone Insurance and Protection Plans:</h3>
            <p>Offering insurance plans that cover theft, damage, or loss of phones.
            Selling extended warranties for new or refurbished phones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
