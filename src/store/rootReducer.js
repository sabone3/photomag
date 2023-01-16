import { combineReducers } from "redux";
import { productsReducer } from "../components/products/reducer";
import { authorizationReducer } from "../components/authorization/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  authorization: authorizationReducer,
});
