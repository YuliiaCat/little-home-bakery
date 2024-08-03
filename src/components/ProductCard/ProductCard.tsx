import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';

type Props = {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, sizeAvailable, price, image, size } = product;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <ul className={styles.list}>
        {sizeAvailable.map((sizeOption: string, index: number) => (
          <li 
            className={classNames (styles.item, {
              [styles.sizeSelected]: size === sizeOption,
            }) }
            key={index}
            >
              {sizeOption}
            </li>
        ))}
      </ul>
      <p className={styles.price}>{`From ${price}$`}</p>
    </div>
  );
}

export default ProductCard;