import { Link } from 'react-router-dom';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section id="contactUs" className={styles.contact}>
      <div className={`container ${styles.contactUs}`}>
        <div className={styles.infoBox}>
          <svg className={styles.icon}>
            <use href="./img/icons.svg#icon-general-inq"></use>
          </svg>
          <h2 className={styles.title}>General Inquiry</h2>
          <p className={styles.text}>If you have any questions about Ladurée, please send an email.</p>
          <Link className={styles.email} to="mailto:littlehomebakery2023@gmail.com">
            Get in touch
          </Link>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.icons}>
            <Link className={styles.iconsWrap} to="https://www.instagram.com/little_home_bakery2023" target="_blank">
              <svg className={styles.icon} width="24" height="24">
                <use href="./img/icons.svg#icon-instagram"></use>
              </svg>
            </Link>
            <Link className={styles.iconsWrap} to="https://www.facebook.com/@little_home_bakery" target="_blank">
              <svg className={styles.icon} width="24" height="24">
                <use href="./img/icons.svg#icon-facebook"></use>
              </svg>
            </Link>
          </div>
          <h2 className={styles.title}>Social media</h2>
          <p className={styles.text}>Follow our latest news and updates</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;