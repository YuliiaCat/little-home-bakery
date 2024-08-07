import styles from './GalleryPage.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { Product } from '../../types/Product';
import classNames from 'classnames';
import iziToast from 'izitoast';
import { getProducts } from '../../services/products';
import Loader from '../../components/Loader/Loader';

const GalleryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductType | null>(ProductType.cakes);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setError('');
    setIsLoading(true); 

    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError('Can\'t load data');
      iziToast.error({
        title: 'Error',
        message: 'Can\'t load data at the moment',
        position: 'topRight',
      });
      console.log(err);

      } finally {
        setIsLoading(false);
      }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categories = useMemo(
    () => [
      ProductType.cakes,
      ProductType.bento,
      ProductType.macarons,
      ProductType.cupcakes,
      ProductType.macarons_box,
      ProductType.eclairs,
    ],
    []
  );

  const filteredProducts = useMemo(
    () =>
      activeCategory
        ? products.filter(product => product.category === activeCategory)
        : products,
    [activeCategory, products]
  );

  const imageUrls = useMemo(
    () =>
      filteredProducts.flatMap(product =>
        product.fullImage.filter(url => url && url.trim() !== '')
      ),
    [filteredProducts]
  );

  return (
  <div className={`container ${styles.gallery}`}>
    <h2 className="title">Gallery</h2>
      <ul className={styles.list}>
        {categories.map((category, index) => (
        <li 
          key={index} 
          className={classNames(styles.item, {
            [styles.isActive]: activeCategory === category,
          })}
          onClick={() => setActiveCategory(category)}
          >
          <h3 className={styles.category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
        </li>
          ))}
      </ul>
      {isLoading && <Loader />}
      <ul className={styles.photoList}>
        {imageUrls.length && !error && !isLoading ? (
            imageUrls.map((url, index) => (
              <li 
                key={index} 
                className={styles.photoItem}
                >
                <img 
                  className={classNames(styles.photo, {
                    [styles.isLoading]: !isLoading,
                  })}
                  src={url} 
                  alt={`Product ${index}`}
                  loading="lazy"
                />
              </li>
            ))
          ) : (
            <li className={styles.photoItem}>No images available</li>
          )}
      </ul>
  </div>
  );
}

export default GalleryPage;