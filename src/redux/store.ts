import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { REDUX_LS, getInitialData } from "./initialState";

export const store = configureStore({
  reducer: cartReducer,
  preloadedState: getInitialData(),
});

store.subscribe(() => {
  localStorage.setItem(REDUX_LS, JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
