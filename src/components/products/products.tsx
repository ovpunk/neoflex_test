import { FC } from "react";
import styles from "./products.module.scss";
import { CurrentProduct } from "../currentProduct/currentProduct";

import { IHeadphones } from "../../products";

interface IProducts {
  products: IHeadphones[];
}

export const Products: FC<IProducts> = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product.id} className={styles.product_wrapper}>
          <CurrentProduct product={product} />
        </div>
      ))}
    </div>
  );
};
