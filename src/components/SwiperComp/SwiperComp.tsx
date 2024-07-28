import styles from './SwiperComp.module.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

const SwiperComp = () => {
  return (
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
        }
      }}
      className={styles.swiperAbout}
    >
      <SwiperSlide>
        <img
          className={styles.img}
          src="./img/about-us/about-us-1.webp"
          alt="About-us"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.img}
          src="./img/about-us/about-us-2.webp"
          alt="About us"
          />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.img}
          src="./img/about-us/about-us-3.webp"
          alt="about-us-pict"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={styles.img}
          src="./img/about-us/about-us-4.webp"
          alt="about-us-pict"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComp;