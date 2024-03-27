import { FC, useState, MouseEvent } from "react";
import styles from "./currentproduct.module.scss";
import star from "../../assets/icons/star.svg";
import { IHeadphones } from "../../products";
import { useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../redux/slices/cartSlice";
import { Modal } from "../modal/modal";
import { ModalProduct } from "../modalProduct/modalProduct";

export interface ICurrentProduct {
  product: IHeadphones;
}

export const CurrentProduct: FC<ICurrentProduct> = ({ product }) => {
  const [active, setActive] = useState(false);
  const [openContent, setOpenContent] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(addProduct(product));
  };

  const handleOpenModal = () => {
    document.body.classList.add("bodyModalOpen");
    setTimeout(() => {
      setOpenContent(true);
    }, 100);
    setActive(true);
  };

  const handleCloseModal = (
    e: MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setActive(false);
    setOpenContent(false);
    document.body.classList.remove("bodyModalOpen");
  };

  return (
    <div className={styles.product} onClick={() => handleOpenModal()}>
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
          <button onClick={(e) => handleAddToCart(e)}>Купить</button>
        </div>
      </div>
      <Modal
        active={active}
        openContent={openContent}
        handleCloseModal={handleCloseModal}
      >
        <ModalProduct product={product} />
      </Modal>
    </div>
  );
};
