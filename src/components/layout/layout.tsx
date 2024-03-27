import { FC } from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
