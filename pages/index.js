import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import SidebarFilters from '../components/SidebarFilters';
import ProductSection from '../components/ProductSection';
import requestProductList from '../utils/api';
import styles from '../styles/Home.module.css';

function HomePage() {
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("10");
  const [products, setProducts] = useState([]);
  const [productsCounter, setProductsCounter] = useState(0);

  useEffect(() => {
    handleRequestProducts(page, limit);
  }, [limit, page]);

  const handleRequestProducts = async (page, limit) => {
    try {
      const { items, totalItems } = await requestProductList(page, limit);
      setProducts(items);
      setProductsCounter(totalItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.flexboxContainer}>
        <SidebarFilters />
        <ProductSection products={products} productsCount={productsCounter} />
      </div>
    </div>
  );
}

export default HomePage;
