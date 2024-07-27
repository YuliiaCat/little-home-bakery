import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>A Special Desserts <br /> For A Special Events</h1>
        <p className={styles.text}>We use only the best ingredients to make the perfect sweets.
        </p>
        <div className={styles.learnMoreButton}>
          <Link className={styles.learnMoreLink} to="/gallery">Learn more</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;