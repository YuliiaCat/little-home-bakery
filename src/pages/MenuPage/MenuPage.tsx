import styles from './MenuPage.module.scss';
import { useEffect, useMemo, useRef, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from '../../services/products';
import { ProductType } from '../../types/ProductType';
import iziToast from 'izitoast';
import ProductList from '../../components/ProductList/ProductList';

const MenuPage = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductType | null>(null);
  const [error, setError] = useState('');
  const listRef = useRef<HTMLUListElement | null>(null);

  const categories = useMemo(() => {
    return [
      ProductType.cakes,
      ProductType.bento,
      ProductType.macarons,
      ProductType.cupcakes,
      ProductType.macarons_box
    ];
  }, [])

   useEffect(() => {
    if (activeCategory !== null && listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCategory]);

  const fetchProducts = (category: ProductType) => {
    setError('');
    getProducts()
      .then(products => {
        const filteredProducts = products.filter(
          (item: Product) => item.category === category,
        );

        setProduct(filteredProducts);
      })
      .catch(err => {
        setError('Can\'t load data')
        iziToast.error({
          title: 'Error',
          message: 'Can\'t load data at the moment',
          position: 'topRight',
        });
        console.log(err);
      })
  };

  const handleTrigger = (category: ProductType) => {
    setActiveCategory(prevCategory => {
      if (prevCategory === category) {
        return null;
      }
      fetchProducts(category);
      return category;
    });
  };

  return (
    <div className={`container ${styles.menu}`}>
      <h2 className={styles.title}>Our menu</h2>
      <ul className={styles.list} ref={listRef}>
        {categories.map((category, index) => (
          <li className={styles.item} key={index}>
            <h3 className={styles.subtitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <button
              className={styles.dropdownBtn}
              type='button'
              onClick={() => handleTrigger(category)}
            >
              {activeCategory === category ? (
                <svg className={styles.icon}>
                  <use href="./img/icons.svg#icon-arrow-up"></use>
                </svg>
                ) : (
                <svg className={styles.icon}>
                  <use href="./img/icons.svg#icon-arrow-down"></use>
                </svg>
              )}
            </button>
            {activeCategory === category && !error && (
              <ProductList products={product} />
            )}
            {activeCategory === category && error && (
              <div className={styles.error}>{error}</div>
          )}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default MenuPage;