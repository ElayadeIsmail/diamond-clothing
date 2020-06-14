import React from "react";
import { connect } from "react-redux";

import "./collection-overview.style.scss";

import { createStructuredSelector } from "reselect";
import { selectCollectionForPrev } from "../../redux/shop/shopSelector";
import CollectionPrev from "../collection-preview/CollectionPrev";

const CollectionOverView = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map((collection) => (
        <CollectionPrev key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPrev,
});

export default connect(mapStateToProps)(CollectionOverView);
