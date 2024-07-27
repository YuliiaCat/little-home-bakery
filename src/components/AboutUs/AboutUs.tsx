import styles from './AboutUs.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={`container ${styles.aboutUsCont}`}>
        <h1 className="visually-hidden">About us</h1>
        <div className={styles.content}>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            speed={1000}
            wrapperClass={styles.swiperList}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 16,
                loop: false,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
                loop: false,
              },

              1550: {
                slidesPerView: 4,
                spaceBetween: 16,
                loop: false,
              },
            }}
            className={styles.swiperAbout}
          >
            <SwiperSlide>
              <img
                className={styles.img}
                src="/img/about-us/about-us-1.webp"
                alt="About-us"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                src="/img/about-us/about-us-2.webp"
                alt="About us"
                />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                src="/img/about-us/about-us-3.webp"
                alt="about-us-pict"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.img}
                src="/img/about-us/about-us-4.webp"
                alt="about-us-pict"
              />
            </SwiperSlide>
          </Swiper>

          <p className="about-us-desc">Welcome to our bakery! Treat yourself to our delicious macarons with wonderful
            flavors and a satisfying crunch.
            Experience the beauty of our cakes, each one a masterpiece of taste and design.
            Whether you love macarons or cakes, our bakery is the perfect spot for tasty treats.
            Check out our menu and take home some artisanal baked goods.
          </p>

        </div>
        <div className="explore-menu-button">
          <a className="explore-menu-link" href="#menu">Explore menu</a>
        </div>
        </div>
    </section>
  );
};

export default AboutUs;