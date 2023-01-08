import types from "./types";

export function setSelectedProducts(selectedProducts) {
  return (dispatch) => {
    dispatch({ type: types.SET_SELECTED_PRODUCTS, payload: selectedProducts });
  };
}
