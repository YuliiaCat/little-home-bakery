import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

const getStyledLink = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.navLink, {
    [styles.isActive]: isActive,
  })

const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink className={getStyledLink} to="/">Home</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={getStyledLink} to="menu">Menu</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={getStyledLink} to="gallery">Gallery</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={getStyledLink} to="/">Contact us</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;