import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "./actionType";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
