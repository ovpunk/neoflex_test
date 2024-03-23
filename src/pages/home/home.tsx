import { FC } from "react";
import styles from "./home.module.scss";
import { Products } from "../../components/products/products";
import { headphones, wireless } from "../../products";

export const Home: FC = () => {
  return (
    <>
      <h2 className={styles.title}>Наушники</h2>
      <Products products={headphones} />
      <h2 className={styles.title}>Беспроводные наушники</h2>
      <Products products={wireless} />
    </>
  );
};
