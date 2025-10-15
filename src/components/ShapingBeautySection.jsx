
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ShapingBeautySection.css';

const ShapingBeautySection = () => {
  return (
    <section className="shaping-beauty-wrapper">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="text-center">
              <h2 className="shaping-heading">
                Shaping Beauty & Extending Life Through 
                <br />
                the Art of Medicine
              </h2>
            </div>
            
            <div className="shaping-content">
              <p>
                Discover why SKIN TREAT is the trusted choice of patients from Dubai and around the world. Experience treatments
                that go beyond aesthetics – designed to rejuvenate, restore, and extend your vitality.
              </p>
              <p>
                Call <a href="tel:+97145774796"><strong>+971 4 5774796</strong></a> to schedule your free consultation with one of our doctors,
                and explore real patient experiences already featured on our website. <a href="#"><strong>TESTIMONIALS</strong></a> &lt; click here!
              </p>
              <p className="mt-4">
                <strong>We Care & Share – At SKIN Clinic™,</strong> we believe in caring beyond treatments.
                We share expert advice and insights so our patients can make informed choices about their beauty, wellness,
                and health.
                Explore our blogs for tips, trends, and guidance on aesthetic treatments and healthy living.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShapingBeautySection;