import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "./actionType";
import { addCartItem, removeCartItem } from "./cartUtils";

const initialState = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
