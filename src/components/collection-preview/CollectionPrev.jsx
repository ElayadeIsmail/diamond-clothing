import React from "react";
import "./collection-prev.style.scss";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPrev = ({ collection: { title, items } }) => {
  return (
    <div className='collection-prev'>
      <Link to={`/shop/${title.toLowerCase()}`} className='link-title'>
        {title}
      </Link>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPrev;
