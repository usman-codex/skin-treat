
import React from 'react';
import './PartnersScroller.css';

const partnerLogos = import.meta.glob('../assets/partners/*.png', { eager: true, as: 'url' });
const logosArray = Object.values(partnerLogos);

const PartnersScroller = () => {
  const duplicatedLogos = [...logosArray, ...logosArray];

  return (
    <div className="partners-scroller-wrapper">
      <div className="scroller-partners">
        <ul className="scroller-inner-partners">
          {duplicatedLogos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Partner logo ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnersScroller;