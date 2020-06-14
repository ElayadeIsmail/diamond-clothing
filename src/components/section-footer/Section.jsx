import React from "react";
import "./section.style.scss";

const Section = () => {
  return (
    <div className='section'>
      <h1 className='title-section'>
        <span className='white'>Why</span> US
      </h1>
      <div className='options'>
        <div className='option'>
          <h2 className='text'>
            <span className='icon'>
              <i className='far fa-credit-card'></i>
            </span>
            {"  "}
            Secure Payments
          </h2>
        </div>
        <div className='option'>
          <h2 className='text'>
            <span className='icon'>
              <i className='fas fa-undo-alt'></i>
            </span>
            {"  "}
            Smooth Returns
          </h2>
        </div>
        <div className='option'>
          <h2 className='text'>
            <span className='icon'>
              <i className='fas fa-shipping-fast'></i>
            </span>
            {"  "}Shipping World Wide
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
