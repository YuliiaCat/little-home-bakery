import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    console.error('Portal root not found');

    return null;
  }

  return ReactDOM.createPortal (
    <div className={styles.modal}>
      <button className={styles.btnClose} onClick={onClose}>
        <svg className={styles.iconClose}>
          <use href="img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div className={styles.content}>
        <div className={styles.contentBox}>
        <h3 className={styles.modalTitle}>Contact us</h3>
        <p className={styles.text}>
          We look forward to hearing from you! 
          For questions about our desserts, online menu, custom orders, 
          or wholesale inquiries, please email us, and we'll respond promptly.
        </p>
        <div className={styles.inquiries}>
          <div className={styles.iconCont}>
            <svg className={styles.icon}>
              <use href="./img/icons.svg#icon-email"></use>
            </svg>
          </div>
          <Link className={styles.link} to="mailto:littlehomebakery2023@gmail.com">
            littlehomebakery2023@gmail.com
          </Link>
        </div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;