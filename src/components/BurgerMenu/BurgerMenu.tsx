import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

type Props = {
  isOpen: boolean,
  onClose: () => void,
}

const BurgerMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={`${styles.burgerMenu} ${isOpen ? styles.isOpen : ''}`}>
      <nav className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={styles.link}
              to="/"
              onClick={onClose}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink 
              className={styles.link} 
              to="menu"
              onClick={onClose}
              >
              Menu
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink 
              className={styles.link} 
              to="gallery"
              onClick={onClose}
            >
              Gallery
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={styles.link}
              to="#"
              onClick={openModal}
            >
              Contact us
            </NavLink>
          </li>
          {isModalOpen && <Modal onClose={closeModal} />}
        </ul>
      </nav>
      </div>
  );
}

export default BurgerMenu;