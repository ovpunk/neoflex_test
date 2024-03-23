import { FC, useEffect } from "react";
import styles from "./cart.module.scss";
import { ProductInTheCart } from "../../components/productInTheCart/productInTheCart";

import { IHeadphonesWithCount } from "../../components/layout/layout";

export const Cart: FC = () => {
  const cartItemsString = sessionStorage.getItem("cartItems");
  const cartItems = cartItemsString && JSON.parse(cartItemsString);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.cart}>
        <div className={styles.left}>
          <div className={styles.products}>
            {cartItems.map((item: IHeadphonesWithCount, i: number) => (
              <ProductInTheCart key={i} props={item} />
            ))}
            {/*<ProductInTheCart />
            <ProductInTheCart />*/}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <p>итого</p>
            <p>₽ 2 927</p>
          </div>
          <button className={styles.button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
