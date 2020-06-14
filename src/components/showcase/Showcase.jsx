import React from "react";
import { Link } from "react-router-dom";
import "./showcase.style.scss";

const Showcase = () => {
  return (
    <div className='showcase'>
      <h1 className='title'>
        <span className='white'>New</span> Seasion
      </h1>
      <h2 className='link'>
        <Link to='/shop'>Shop Now</Link>
      </h2>
    </div>
  );
};

export default Showcase;
