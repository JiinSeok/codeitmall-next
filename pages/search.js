import { useRouter } from 'next/router';
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Search() {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { keyword } = router.query;

    async function getProducts(value) {
        const res = await axios.get(`/products/?keyword=${value}`);
        const nextProducts = await res.data.results || [];
        setProducts(nextProducts);
    }

    useEffect(() => {
        if (keyword) {
            getProducts(keyword).then();
        }
    }, [keyword]);

    return (
        <div>
            <h1>Search</h1>
            <SearchForm initialKeyword={keyword} />
            <h2>{keyword} 검색 결과</h2>
            <ProductList products={products} />
        </div>
    );
}