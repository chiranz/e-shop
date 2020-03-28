import { UPDATE_COLLECTIONS } from "./actionTypes.shop";

const initialState = {
  collections: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload, loading: false };
    default:
      return state;
  }
}
