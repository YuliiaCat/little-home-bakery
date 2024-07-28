import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link className={styles.headerLogo} to="/"></Link>
        <Link to="/" className={styles.iconMenuCont} id="menu-toggle">
          <svg className={styles.iconMenu} width="20" height="20">
            <use href="./img/icons.svg#icon-menu"></use>
          </svg>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;