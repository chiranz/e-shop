import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../actionTypes.user";

export function toggleCartHidden() {
  return {
    type: TOGGLE_CART_HIDDEN
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
