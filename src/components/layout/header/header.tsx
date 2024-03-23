import { FC } from "react";
import styles from "./header.module.scss";
import favorite from "../../../assets/icons/favorite.svg";
import cart from "../../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper + " " + "container"}>
        <div className={styles.logo}>
          <Link to="/">QPICK</Link>
        </div>
        <nav>
          <ul>
            <li>
              <img src={favorite} alt="Избранное" />
            </li>
            <li>
              <Link to="/cart">
                <img src={cart} alt="Корзина" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
