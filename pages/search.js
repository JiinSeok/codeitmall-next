import { useRouter } from 'next/router';
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Search() {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { q } = router.query;

    async function getProducts(query) {
        const res = await axios.get(`/products/?q=${query}`); // 리퀘스트 요청에 있는 q 사용
        const nextProducts = await res.data.results || [];
        setProducts(nextProducts);
    }

    useEffect(() => {
        getProducts(q).then();
    }, [q]);

    return (
        <div>
            <h1>Search</h1>
            <SearchForm initialQuery={q} />
            <h2>{q} 검색 결과</h2>
            <ProductList products={products} />
        </div>
    );
}