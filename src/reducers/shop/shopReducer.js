import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_SUCCESS
} from "./actionTypes.shop";

const initialState = {
  collections: {},
  isFetching: true,
  error: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
