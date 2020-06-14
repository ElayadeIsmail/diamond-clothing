import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <div className='name'>
          {quantity} X {price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
