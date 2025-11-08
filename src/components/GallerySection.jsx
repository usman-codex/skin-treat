
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GallerySection.css';

import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';

const galleryData = [
  { image: gallery1, text: 'AWESOME DOCTORS' },
  { image: gallery2, text: 'FREE CONSULTATION, AFTER-CARE FOLLOW-UP' },
  { image: gallery3, text: 'NEWEST AESTHETICS TRENDS' },
  { image: gallery4, text: 'MEMBERSHIP DEALS' },
  { image: gallery5, text: 'BEST TECHNOLOGIES' },
];

const GallerySection = () => {
  return (
    <section className="gallery-section-wrapper">
      <Container>
        <div className="text-center mb-5">
          <button className="gallery-button">
            Learn more in our Blogs
          </button>
        </div>

        <Row className="g-4 justify-content-center">
          {galleryData.map((item, index) => (
            <Col key={index} lg="auto" md={4} sm={6}>
              <div className="gallery-card">
                <img src={item.image} alt={item.text} className="gallery-image" />
                <div className="gallery-overlay">
                  <h5>{item.text}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GallerySection;