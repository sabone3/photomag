import types from "./types";

const initialState = {
  selectedProducts: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SELECTED_PRODUCTS:
      return { ...state, selectedProducts: action.payload };
    default:
      return state;
  }
}
