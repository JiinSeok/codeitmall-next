import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

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
      <div>
        <h1>Codeitmall</h1>
        <SearchForm />
        <ProductList products={products} />
      </div>
  );
}
