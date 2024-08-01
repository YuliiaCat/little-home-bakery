import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import React from 'react';

type Props = {
  isOpen: boolean,
  onClose: () => void,
}

const BurgerMenu: React.FC<Props> = ({ isOpen, onClose }) => {
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
              to="contact-us"
              onClick={onClose}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;