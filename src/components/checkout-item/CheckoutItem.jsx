import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  removeItemFromCart,
} from "../../redux/cart/cartAction";

const CheckoutItem = ({
  cartItem,
  addItem,
  removeItem,
  removeItemFromCart,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => removeItem(cartItem)} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className='arrow'>
          &#10095;
        </div>
      </span>{" "}
      <span className='price'>$ {quantity * price}</span>{" "}
      <div
        onClick={() => removeItemFromCart(cartItem)}
        className='remove-button'
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { addItem, removeItemFromCart, removeItem })(
  CheckoutItem
);
