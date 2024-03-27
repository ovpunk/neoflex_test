import { FC } from "react";
import styles from "./productinthecart.module.scss";
import { IHeadphones } from "../../products";
import { useAppDispatch } from "../../hooks/hooks";
import {
  addProduct,
  decrementProduct,
  deleteProduct,
} from "../../redux/slices/cartSlice";

interface IProfuctInTheCartProps {
  product: IHeadphones;
}

export const ProductInTheCart: FC<IProfuctInTheCartProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const countDecrement = () => {
    if (product && product.count > 1) {
      dispatch(decrementProduct(product));
    }
  };

  const countIncrement = () => {
    dispatch(addProduct(product));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className={styles.product}>
      <div className={styles.top}>
        <div className={styles.img_wrapper}>
          <img src={product.img} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{product.title}</p>
          <span className={styles.price}>{product.price} ₽</span>
        </div>
        <button onClick={() => handleDeleteProduct()} className={styles.delete}>
          <img src="/src/assets/icons/delete.svg" alt="" />
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.count}>
          <button onClick={() => countDecrement()}>
            <img src="/src/assets/icons/minus.svg" alt="" />
          </button>

          <div className={styles.count_value}>
            <p>{product.count}</p>
          </div>
          <button onClick={() => countIncrement()}>
            <img src="/src/assets/icons/plus.svg" alt="" />
          </button>
        </div>
        <div className={styles.total_price}>
          {product.count * product.price} ₽
        </div>
      </div>
    </div>
  );
};
