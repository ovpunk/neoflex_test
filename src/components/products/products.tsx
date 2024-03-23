import { FC } from "react";
import styles from "./products.module.scss";
import { CurrentProduct } from "../currentProduct/currentProduct";
import { IHeadphonesWithCount } from "../layout/layout";

interface IProducts {
  products: IHeadphonesWithCount[];
}

export const Products: FC<IProducts> = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product, i) => (
        <CurrentProduct key={i} product={product} />
      ))}
    </div>
  );
};
