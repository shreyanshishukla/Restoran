import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menudata, { cartReducer } from "./Reducer";
//const reducers = combineReducers({ menudata, cartReducer });

export default configureStore({
  reducer: {
    cart: cartReducer,
    menudata: menudata,
  },
});
