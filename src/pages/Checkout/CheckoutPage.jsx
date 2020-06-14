import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import {
  cartItemsSelector,
  CartItemsTotalSelector,
} from "../../redux/cart/cartSelector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div>
      <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Total Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='checkout-footer'>
          {cartItems.length ? (
            <div className='link'>
              <Link to='/shop'>
                {" "}
                <i className='fas fa-arrow-left'></i> Continue Shopping
              </Link>
            </div>
          ) : null}

          <div className='total'>
            <span>TOTAL: ${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: CartItemsTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
