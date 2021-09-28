import axios from "axios";
require("dotenv").config();

export const SET_PRODUCTS = "[Products Creation] Creating products";
export const SELECTED_PRODUCTS = "[Selecting the Products] products selection";
export const REMOVE_SELECTED_PRODUCTS = "[Remove Products] Remove products";
export const FETCH_PRODUCTS = "[Fetch Products] Fetch Products";

export const fetchProducts = () => async (dispatch) => {
  const productUrl = process.env.REACT_APP_PRODUCT_API;
  const response = await axios.get(" http://localhost:3001/api/v1/products");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const productUrl = process.env.REACT_APP_PRODUCT_API;
  const response = await axios.get(
    ` http://localhost:3001/api/v1/products/${id}`
  );
  dispatch({ type: SELECTED_PRODUCTS, payload: response.data.data });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};
