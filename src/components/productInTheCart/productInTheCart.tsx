import { FC } from "react";
import styles from "./productinthecart.module.scss";
import { IHeadphonesWithCount } from "../layout/layout";

interface IProductInTheCartProps {
  props: IHeadphonesWithCount;
}

export const ProductInTheCart: FC<IProductInTheCartProps> = ({ props }) => {
  const { img, title, price, count } = props;

  //доделать функцию для увеличения кол-ва
  const countIncrement = () => {};

  return (
    <div className={styles.product}>
      <div className={styles.top}>
        <div className={styles.img_wrapper}>
          <img src={img} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <span className={styles.price}>{price} ₽</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.count}>
          <button>
            <img src="/src/assets/icons/minus.svg" alt="" />
          </button>
          <p>{count}</p>
          <button>
            <img src="/src/assets/icons/plus.svg" alt="" />
          </button>
        </div>
        <div className={styles.total_price}>{price * count} ₽</div>
      </div>
    </div>
  );
};
