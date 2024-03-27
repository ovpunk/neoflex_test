import { FC } from "react";
import styles from "./cart.module.scss";
import { ProductInTheCart } from "../../components/productInTheCart/productInTheCart";
import { useAppSelector } from "../../hooks/hooks";
import { IHeadphones } from "../../products";

export const Cart: FC = () => {
  const { products, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.cart}>
        <div className={styles.left}>
          <div className={styles.products}>
            {products.map((product: IHeadphones) => (
              <ProductInTheCart key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <p>итого</p>
            <p>₽ {totalPrice}</p>
          </div>
          <button className={styles.button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
