import { useEffect, useRef, useState } from 'react';
import SwiperComp from '../SwiperComp/SwiperComp';
import styles from './AboutUs.module.scss';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1}
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
}, []);

  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={`container ${styles.aboutUsCont}`}>
        <h1 className="visually-hidden">About us</h1>
        <div className={styles.content}>
          <SwiperComp />

        <img className={styles.imgFirst} src="./img/about-us/about-us-1.webp" alt="Macaron" />

          <p 
            ref={sectionRef}
            className={`${styles.description} ${isVisible ? styles.animate : ''}`}
            >
              <span className={styles.welcome}>Welcome to our bakery!</span> Discover the joy of fresh, delicious baked goods made with love.
            From macarons and cakes to eclairs, everything is crafted with the best ingredients.
            Check out our menu and enjoy the warmth and charm of our bakery.
          </p>

          <img className={styles.img} src="./img/about-us/about-us-4.webp" alt="Macaron" />
        </div>
        <div className={styles.exploreMenuBtn}>
          <Link className={styles.exploreMenuLink} to="/menu">Explore menu</Link>
        </div>

        <div className={styles.picturesBlock}>
          <img className={styles.pictWide} src="./img/about-us/about-us-pict-1.webp" alt="About us" />
          <img className={styles.pictWideDesk} src="./img/about-us/about-us-pict-1-desk.webp" alt="About us" />
          <img className={styles.pict2} src="./img/about-us/about-us-3.webp" alt="Macaron" />
          <img className={styles.pict1} src="./img/about-us/about-us-2.webp" alt="Macaron" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;