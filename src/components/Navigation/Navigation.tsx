import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="/">Home</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="menu">Menu</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="gallery">Gallery</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to="/">Contact us</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;