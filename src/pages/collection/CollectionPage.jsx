import React from "react";
import "./collection-page.style.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";

import { selectCollection } from "../../redux/shop/shopSelector";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collections: selectCollection(props.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
