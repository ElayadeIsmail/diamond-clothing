import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ section: { title, imageUrl, size, linkUrl }, history }) => {
  return (
    <div
      onClick={() => history.push(`${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
      <div className='content'>
        <span className='title'>{title.toUpperCase()}</span>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
