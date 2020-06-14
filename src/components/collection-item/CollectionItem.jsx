import React from "react";
import "./collection-item.style.scss";
import CustomBtn from "../custom-btn/CustomBtn";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className='collection-item'>
      <img src={imageUrl} alt='item' />

      <div className='content'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomBtn onClick={() => addItem(item)}>
        <i className='fas fa-shopping-cart'></i> SHOP NOW
      </CustomBtn>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
