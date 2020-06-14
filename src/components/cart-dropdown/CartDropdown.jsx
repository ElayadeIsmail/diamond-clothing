import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";
import CustomBtn from "../custom-btn/CustomBtn";
import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { cartItemsSelector } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your Cart Is Empty</span>
        )}
      </div>
      <CustomBtn
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
        }}
      >
        Go To Checkout Page
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
