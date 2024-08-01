import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return(
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link className={styles.headerLogo} to="/"></Link>
        {!isOpen ? (
          <button className={styles.iconMenuCont} onClick={handleOpen}>
            <svg className={styles.iconMenu}>
              <use href="./img/icons.svg#icon-menu"></use>
            </svg>
          </button>
          ) : (
          <button className={styles.iconMenuCont} onClick={handleClose}>
            <svg className={styles.iconMenuClose}>
              <use href="./img/icons.svg#icon-close"></use>
            </svg>
          </button>
        )}
        <BurgerMenu isOpen={isOpen} onClose={handleClose} /> 
        <Navigation />
      </div>
    </header>
  );
};

export default Header;