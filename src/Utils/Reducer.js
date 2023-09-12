import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menudata: [],
  dishes: [],
};
const initialStatecart = {
  cart: {},
  cartCount: 0,
  cartTotal: 0,
};
const menudata = createSlice({
  name: "menu",
  initialState,
  reducers: {
    add: (state, action) => {
      state.menudata = [...action.payload];
    },
    sortasc: (state, action) => {
      let newState = state.dishes;
      newState.sort(
        (disha, dishb) =>
          disha["sub-items"][0].price - dishb["sub-items"][0].price
      );
      state.dishes = newState;
    },
    sortdec: (state, action) => {
      let newState = state.dishes;
      newState.sort(
        (disha, dishb) =>
          dishb["sub-items"][0].price - disha["sub-items"][0].price
      );
      state.dishes = newState;
    },
    loadDishes: (state, action) => {
      let newState = [];
      state.menudata.forEach((ele) => {
        ele["menu-items"].forEach((d) => {
          newState = [...newState, { ...d, type: ele.name }];
        });
      });

      state.dishes = newState;
    },
  },
});
const ReducerCart = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    cartCount: 0,
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart[action.payload.id]
        ? {
            ...state.cart,
            [action.payload.id]: {
              ...state.cart[action.payload.id],
              quantity: state.cart[action.payload.id].quantity + 1,
            },
          }
        : { ...state.cart, [action.payload.id]: action.payload };

      state.cartTotal = state.cartTotal + +action.payload.price;
      state.cartCount = Object.keys(state.cart).length;
    },

    addOneMore: (state, action) => {
      state.cart = {
        ...state.cart,
        [action.payload]: {
          ...state.cart[action.payload],
          quantity: state.cart[action.payload].quantity + 1,
        },
      };
      state.cartTotal = state.cartTotal + state.cart[action.payload].price;
    },
    deleteFromCart: (state, action) => {
      state.cartTotal =
        state.cartTotal -
        state.cart[action.payload].price * state.cart[action.payload].quantity;

      delete state.cart[action.payload];
      state.cartCount = Object.keys(state.cart).length;
    },
    clearCart: (state, action) => {
      state.cartTotal = 0;
      state.cartCount = 0;
      state.cart = {};
    },
    removeOne: (state, action) => {
      state.cartTotal = state.cartTotal - state.cart[action.payload].price;
      if (state.cart[action.payload].quantity == 1) {
        delete state.cart[action.payload];
      } else {
        state.cart = {
          ...state.cart,
          [action.payload]: {
            ...state.cart[action.payload],
            quantity: state.cart[action.payload].quantity - 1,
          },
        };
      }
      state.cartCount = Object.keys(state.cart).length;
    },
  },
});

export const { add, sortasc, sortdec, loadDishes } = menudata.actions;
export const { addToCart, addOneMore, removeOne, deleteFromCart, clearCart } =
  ReducerCart.actions;
export default menudata.reducer;
export const cartReducer = ReducerCart.reducer;
