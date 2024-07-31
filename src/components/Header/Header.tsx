import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
// import { useState } from 'react';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClose = () => {
  //   setIsOpen(false);
  // }

  return(
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link className={styles.headerLogo} to="/"></Link>
        <button className={styles.iconMenuCont}>
          <svg className={styles.iconMenu} width="20" height="20">
            <use href="./img/icons.svg#icon-menu"></use>
          </svg>
        </button>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;