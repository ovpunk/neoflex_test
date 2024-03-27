import classNames from "classnames";
import styles from "./modal.module.scss";
import { CSSTransition } from "react-transition-group";
import { MouseEvent, ReactNode, useRef } from "react";

interface IModalProps {
  active: boolean;
  openContent: boolean;
  handleCloseModal: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Modal = ({
  active,
  openContent,
  handleCloseModal,
  children,
}: IModalProps) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={active}
      timeout={400}
      nodeRef={nodeRef}
      classNames={{
        enter: styles["modal-enter"],
        enterActive: styles["modal-enter-active"],
        exit: styles["modal-exit"],
        exitActive: styles["modal-exit-active"],
      }}
      unmountOnExit
    >
      <div
        className={styles.modal}
        onClick={(e: MouseEvent<HTMLDivElement>) => handleCloseModal(e)}
        ref={nodeRef}
      >
        <div
          className={
            active && openContent
              ? classNames(styles.content_active, styles.content)
              : styles.content
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className={styles.close}
            onClick={(e: MouseEvent<HTMLButtonElement>) => handleCloseModal(e)}
          >
            <svg
              data-name="Layer 1"
              height="200"
              id="Layer_1"
              viewBox="0 0 200 200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};
