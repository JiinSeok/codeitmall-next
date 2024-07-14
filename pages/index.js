import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export async function getStaticProps() {
  // 정적 생성 시 Next.js가 실행할 함수를 구현
  const res = await axios.get('/products');
  const products = await res.data.results;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
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
