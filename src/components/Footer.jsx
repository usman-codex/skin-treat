
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="gy-5">
         
          <Col lg={4} md={6}>
            <div className="footer-col">
              <h4 className="footer-heading">Opening Hours</h4>
              <ul className="timings-list">
                <li>Monday <span>10 AM - 8 PM</span></li>
                <li>Tuesday <span>10 AM - 8 PM</span></li>
                <li>Wednesday <span>10 AM - 8 PM</span></li>
                <li>Thursday <span>10 AM - 8 PM</span></li>
                <li>Friday <span>10 AM - 8 PM</span></li>
                <li>Saturday <span>10 AM - 7 PM</span></li>
                <li>Sunday <span>10 AM - 8 PM</span></li>
              </ul>
              <h4 className="footer-heading mt-5">Our Address</h4>
              <p>
                <a href="#">Bay View Tower, 20th Floor Business Bay, Dubai, UAE P.O. Box. 416 963</a>
              </p>
            </div>
          </Col>

         
          <Col lg={4} md={6}>
            <div className="footer-col">
              <h4 className="footer-heading">Book Your Free Consultation</h4>
              <form className="footer-form">
                <Row>
                  <Col md={6}><input type="text" placeholder="First Name" required /></Col>
                  <Col md={6}><input type="text" placeholder="Last Name" required /></Col>
                  <Col md={6}><input type="email" placeholder="Email" required /></Col>
                  <Col md={6}><input type="tel" placeholder="Phone" required /></Col>
                  <Col xs={12}><textarea placeholder="Type your message here" rows="3"></textarea></Col>
                  <Col xs={12}><button type="submit" className="submit-btn">SUBMIT</button></Col>
                </Row>
              </form>
            </div>
          </Col>

      
          <Col lg={4} md={12}>
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-info">
                <FaWhatsapp className="contact-icon whatsapp" />
                <FaPhoneAlt className="contact-icon phone" />
                <span>+971 4 5774796</span>
              </div>
              <p className="email-info">contact@skintreat.com</p>
              
              <h4 className="footer-heading mt-5">Follow Us</h4>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;