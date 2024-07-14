import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import axios from '@/lib/axios';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const query = context.query['q'];

  const res = await axios.get(`/products/?q=${query}`); // 리퀘스트 요청에 있는 q 사용
  const products = (await res.data.results) || [];

  return {
    props: {
      products,
      query,
    },
  };
}

export default function Search({ products, query }) {
  return (
    <>
      <Head>
        <title>{query} 검색 결과 - Codeitmall</title>
      </Head>
      <div>
        <h1>Search</h1>
        <SearchForm initialQuery={query} />
        <h2>{query} 검색 결과</h2>
        <ProductList products={products} />
      </div>
    </>
  );
}
