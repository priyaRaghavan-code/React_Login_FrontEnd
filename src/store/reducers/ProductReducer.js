import {
  FETCH_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
} from "../actions/ProductAction";

const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, action) => {
  if (action.type === SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  if (action.type === FETCH_PRODUCTS) {
    return { ...state, products: action.payload };
  }

  return state;
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCTS:
      return {
        ...state,
        ...payload,
      };

    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return {
        state,
      };
  }
};
