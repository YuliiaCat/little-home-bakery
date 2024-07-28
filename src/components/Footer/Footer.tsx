import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <Link className={styles.logo} to="/"></Link>
      <h2 className={styles.title}>Contact info</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.iconCont}>
            <svg className={styles.icon}>
              <use href="/img/icons.svg#icon-email"></use>
            </svg>
          </div>
          <Link className={styles.link} to="mailto:littlehomebakery2023@gmail.com">
            littlehomebakery2023@gmail.com
          </Link>
        </li>
        <li className={styles.item}>
          <div className={styles.iconCont}>
            <svg className={styles.icon}>
              <use href="/img/icons.svg#icon-location"></use>
            </svg>
          </div>
          <Link className={styles.link} to="#">
            Miami, USA
          </Link>
        </li>
      </ul>
      <p className="rights">&copy; Little Home Bakery. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;