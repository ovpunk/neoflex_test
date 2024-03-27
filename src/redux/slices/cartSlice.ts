import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState, getInitialData, initialData } from "../initialState";
import { IHeadphones } from "../../products";

const initialState: IRootState = getInitialData().cart || initialData;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IHeadphones>) {
      const product = state.cart.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.count++;
        state.cart.totalPrice = state.cart.products.reduce((sum, obj) => {
          return sum + obj.price * obj.count;
        }, 0);
        return;
      }
      state.cart.products.push({ ...action.payload, count: 1 });
      state.cart.totalPrice = state.cart.products.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    decrementProduct(state, action: PayloadAction<IHeadphones>) {
      const product = state.cart.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.count--;
        state.cart.totalPrice = state.cart.products.reduce((sum, obj) => {
          return sum + obj.price * obj.count;
        }, 0);
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.cart.products = state.cart.products.filter(
        (product) => product.id !== action.payload
      );
      state.cart.totalPrice = state.cart.products.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
  },
});

export const { addProduct, decrementProduct, deleteProduct } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
