import { FC, useContext, useEffect, useState } from "react";
import styles from "./currentproduct.module.scss";
import star from "../../assets/icons/star.svg";
import { CartContext, IHeadphonesWithCount } from "../layout/layout";

interface ICurrentProduct {
  product: IHeadphonesWithCount;
}

export const CurrentProduct: FC<ICurrentProduct> = ({ product }) => {
  const cartItemsString = sessionStorage.getItem("cartItems");
  const cartItems: IHeadphonesWithCount[] =
    cartItemsString && JSON.parse(cartItemsString);

  const { cart, setCart } = useContext(CartContext);

  // возможно нужно сделат count через состоянине, посмотреть в других проектах
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCart = [...cartItems, { ...product, count: 1 }];
      setCart(newCart);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={styles.product}>
      <div className={styles.img_wrapper}>
        <img
          src={product.img}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.info_top}>
          <p className={styles.title}>{product.title}</p>
          <span className={styles.price}>{product.price} ₽</span>
        </div>
        <div className={styles.info_bottom}>
          <div className={styles.rate}>
            <img src={star} alt="Рейтинг" />
            <span>{product.rate}</span>
          </div>
          <button onClick={() => handleAddToCart()}>Купить</button>
        </div>
      </div>
    </div>
  );
};
