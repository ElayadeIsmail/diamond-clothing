import React from "react";
import "./not-found-page.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <h2>
        Oooops You Are Lost <span className='white'>?</span>
      </h2>
      <Link to='/'>
        {" "}
        <i className='fas fa-arrow-left'></i> Go Back To HomePage
      </Link>
    </div>
  );
};

export default NotFoundPage;
