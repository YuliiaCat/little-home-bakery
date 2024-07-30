import styles from './MenuPage.module.scss';
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { getProducts } from '../../services/products';
import { ProductType } from '../../types/ProductType';
import iziToast from 'izitoast';
import ProductList from '../../components/ProductList/ProductList';

const MenuPage = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = () => {
    setError('');
    getProducts()
      .then(products => {
        const filteredProducts = products.filter(
          (item: Product) => item.category === ProductType.cakes,
        );

        setProduct(filteredProducts);
      })
      .catch(err => {
        setError('Cant load data')
        iziToast.error({
          title: 'Error',
          message: 'Can\'t load data at the moment',
          position: 'topRight',
        });
        console.log(err);
      })
  };

  useEffect(() => {
    fetchProducts();
  }, [product]);

  const handleTrigger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${styles.menu}`}>
      <h2 className={styles.title}>Our menu</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.subtitle}>Cakes</h3>
          <button
            className={styles.dropdownBtn}
            type='button'
            onClick={handleTrigger}
          >
            {isActive ? (
              <svg className={styles.icon}>
                <use href="./img/icons.svg#icon-arrow-up"></use>
              </svg>
              ) : (
              <svg className={styles.icon}>
                <use href="./img/icons.svg#icon-arrow-down"></use>
              </svg>
            )}
          </button>
        </li>
        {!error && (
          <ProductList products={product} />
        )}
        {/* <li>
          <h3>{title}</h3>
        </li>
        <li>
          <h3>{title}</h3>
        </li>
        <li>
          <h3>{title}</h3>
        </li>
        <li>
          <h3>{title}</h3>
        </li> */}
      </ul>
    </div>
  );
}

export default MenuPage;