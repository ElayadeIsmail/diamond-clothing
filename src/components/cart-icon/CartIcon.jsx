import React from "react";
import { ReactComponent as Icon } from "../../assets/supermarket.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import "./cart-icon.style.scss";
import {
  toggleHiddenSelector,
  CartItemsCountSelector,
} from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
  return (
    <div onClick={() => toggleCartHidden()} className='cart-icon'>
      <Icon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: toggleHiddenSelector,
  cartItemsCount: CartItemsCountSelector,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
