
import React from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
  return (
    <div className="floating-container">
      <button className="btn btn-light shadow-lg request-btn">
        Request Information
      </button>
      <div className="voucher-text">
        <p>Get a Welcoming Voucher for</p>
        <p>Your First Treatment</p>
      </div>
    </div>
  );
};

export default FloatingElements;