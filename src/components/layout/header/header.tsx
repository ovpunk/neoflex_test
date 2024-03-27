import { FC } from "react";
import styles from "./header.module.scss";
import favorite from "../../../assets/icons/favorite.svg";
import cart from "../../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { IRootState } from "../../../redux/initialState";

export const Header: FC = () => {
  const { products } = useAppSelector((state: IRootState) => state.cart);

  const totalCount: number = products.reduce((sum, obj) => sum + obj.count, 0);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.logo}>
            <Link to="/">QPICK</Link>
          </div>
          <nav>
            <ul>
              <li className={styles.favorite}>
                <img src={favorite} alt="Избранное" />
              </li>
              <li className={styles.cart}>
                <Link to="/cart">
                  <img src={cart} alt="Корзина" />
                </Link>
                {!!totalCount && (
                  <div className={styles.count_wrapper}>
                    <div className={styles.count_circle}>
                      <span className={styles.count}>{totalCount}</span>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
