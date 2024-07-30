import React from 'react';
import { Product } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';

type Props = {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;