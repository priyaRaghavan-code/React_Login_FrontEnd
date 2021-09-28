const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "ADD_TO_CART":
      debugger;
      // console.log(action.payload.product.id, "Product details");
      const { product } = action.payload;
      console.log(product.id);
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.price * 1;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
        };
        console.log(Tprice);
      }
    default:
      return state;
  }
};
