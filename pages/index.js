import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = await res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts().then();
  }, []);

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <div>
        <h1>Codeitmall</h1>
        <SearchForm />
        <ProductList products={products} />
      </div>
    </>
  );
}
