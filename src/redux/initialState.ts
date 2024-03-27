import { IHeadphones } from "../products";

export const REDUX_LS = "redux_superStore";

export interface ICartState {
  products: IHeadphones[];
  totalPrice: number;
}

export interface IRootState {
  cart: ICartState;
}

export const initialData: IRootState = {
  cart: {
    products: [],
    totalPrice: 0,
  },
};

export const getInitialData = () => {
  const data = localStorage.getItem(REDUX_LS);
  return data ? JSON.parse(data) : initialData;
};
