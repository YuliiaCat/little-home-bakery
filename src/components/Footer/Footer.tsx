import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} to="/"></Link>
      <h2 className={styles.titleFooter}>Contact info</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.iconCont}>
            <svg className={styles.icon}>
              <use href="./img/icons.svg#icon-email"></use>
            </svg>
          </div>
          <Link className={styles.link} to="mailto:littlehomebakery2023@gmail.com">
            littlehomebakery2023@gmail.com
          </Link>
        </li>
        <li className={styles.item}>
          <div className={styles.iconCont}>
            <svg className={styles.icon}>
              <use href="./img/icons.svg#icon-location"></use>
            </svg>
          </div>
          <Link className={styles.link} to="https://www.google.com/maps/place/Miami+Beach,+FL,+USA/@25.810313,-80.1813411,13z/data=!3m1!4b1!4m6!3m5!1s0x88d9a6172bfeddb9:0x37be1741259463eb!8m2!3d25.790654!4d-80.1300455!16zL20vMHJubXk?hl=en&entry=ttu">
            Miami, USA
          </Link>
        </li>
      </ul>
      <p className="rights">&copy; Little Home Bakery. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;