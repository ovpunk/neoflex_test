import { FC, useState } from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
export const Footer: FC = () => {
  const [activeLang, setActiveLang] = useState("Рус");

  const handleChangeLang = (lang: string) => {
    setActiveLang(lang);
  };
  const navigation = [
    { title: "Избранное", path: "/" },
    { title: "Корзина", path: "/cart" },
    { title: "Контакты", path: "/" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper + " " + "container"}>
        <div className={styles.logo}>QPICK</div>
        <nav className={styles.navigation}>
          <ul>
            {navigation.map((el) => (
              <Link to={el.path} key={el.title}>
                <li>{el.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className={styles.options}>
          <a href="">Условия сервиса</a>
          <div className={styles.language}>
            <img src="/src/assets/icons/lang.svg" alt="" />
            <p
              className={activeLang === "Рус" ? styles.active : ""}
              onClick={() => handleChangeLang("Рус")}
            >
              Рус
            </p>
            <p
              className={activeLang === "Eng" ? styles.active : ""}
              onClick={() => handleChangeLang("Eng")}
            >
              Eng
            </p>
          </div>
        </div>
        <nav className={styles.social_networks}>
          <ul>
            <a href="https://vk.com">
              <li>
                <img src="/src/assets/icons/vk.svg" alt="vk" />
              </li>
            </a>
            <a href="https://t.me/ovpunk">
              <li>
                <img src="/src/assets/icons/tg.svg" alt="tg" />
              </li>
            </a>
            <a href="tel:+79991113311">
              <li>
                <img src="/src/assets/icons/wa.svg" alt="wa" />
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
