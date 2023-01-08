import { combineReducers } from "redux";
import { productsReducer } from "../components/products/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});
