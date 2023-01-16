import types from "./types";

export const setSelectAuthorization = (selectAuthorization) => {
  return (dispatch) => {
    dispatch({
      type: types.SET_SELECTED_AUTHORIZATION,
      payload: selectAuthorization,
    });
  };
};
