import React from 'react';
import { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';

type Props = {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map(product => (
        <li key={product.id}><ProductCard product={product} /></li>
      ))}
    </ul>
  );
}

export default ProductList;