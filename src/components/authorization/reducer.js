import types from "./types";

const initialState = {
  selectAuthorization: "Log In",
};

export function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SELECTED_AUTHORIZATION:
      return { ...state, selectAuthorization: action.payload };
    default:
      return state;
  }
}
