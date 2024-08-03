import styles from './GalleryPage.module.scss';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { Product } from '../../types/Product';
import classNames from 'classnames';
import iziToast from 'izitoast';
import { getProducts } from '../../services/products';

const GalleryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductType | null>(ProductType.cakes);
  const [error, setError] = useState<string>('');

  const fetchProducts = async () => {
    setError('');
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
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
      ProductType.cakes,
      ProductType.bento,
      ProductType.macarons,
      ProductType.cupcakes,
      ProductType.macarons_box,
      ProductType.eclairs
    ];

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

    const imageUrls = filteredProducts.flatMap(product =>
      product.fullImage.filter(url => url && url.trim() !== '')
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
      <ul className={styles.photoList}>
        {imageUrls.length && !error ? (
            imageUrls.map((url, index) => (
              <li key={index} className={styles.photoItem}>
                <img className={styles.photo} src={url} alt={`Product ${index}`} />
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