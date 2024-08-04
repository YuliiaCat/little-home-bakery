import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const getStyledLink = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.navLink, {
    [styles.isActive]: isActive,
  })

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <NavLink className={styles.navLink} to='#' onClick={openModal}>Contact us</NavLink>
      </li>
      {isModalOpen && <Modal onClose={closeModal} />}
    </ul>
  );
};

export default Navigation;