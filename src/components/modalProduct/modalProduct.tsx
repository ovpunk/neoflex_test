import { FC } from "react";
import styles from "./modalproduct.module.scss";
import { ICurrentProduct } from "../currentProduct/currentProduct";
import { useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../redux/slices/cartSlice";

export const ModalProduct: FC<ICurrentProduct> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className={styles.wrapper}>
      <img src={product.img} alt="" className={styles.img} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>
        Цена: <span>{product.price} ₽</span>
      </p>
      <p className={styles.description}>
        Описание: <span>{product.description}</span>
      </p>

      <button className={styles.button} onClick={() => handleAddToCart()}>
        В корзину
      </button>
    </div>
  );
};
