import { TOGGLE_CART_HIDDEN } from "../actionTypes";

const initialState = {
  hidden: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
}
