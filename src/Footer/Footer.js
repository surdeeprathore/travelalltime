import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' style={{ background: 'linear-gradient(90deg, #005aa7, #fffde4)' }}>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Popular Destinations</h3>
          <ul>
            <li>Greece</li>
            <li>Bulgaria</li>
            <li>Egypt</li>
            <li>Turkey</li>
            <li>Croatia</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Working Hours</h3>
          <ul>
            <li>Monday - Friday 09:00-19:00</li>
            <li>Saturday - 10:00-14:00</li>
            <li>Sunday - 12:00-18:00</li>
          </ul>
          <p>Call charges apply according to operator rates.</p>
        </div>
        <div className='footer-section newsletter'>
          <h3>Newsletter</h3>
          <input type='email' placeholder='E-Mail Address' /><button>→</button>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>@2025.Traveller_webiste. All the Rights reserved About Us | Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
