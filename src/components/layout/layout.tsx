import { FC, createContext, useState } from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";
import { IHeadphones } from "../../products";

export interface IHeadphonesWithCount extends IHeadphones {
  count: number;
}

interface ICartContext {
  cart: IHeadphonesWithCount[];
  setCart: React.Dispatch<React.SetStateAction<IHeadphonesWithCount[]>>;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  setCart: () => {},
});

export const Layout: FC = () => {
  const [cart, setCart] = useState<IHeadphonesWithCount[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </CartContext.Provider>
  );
};
