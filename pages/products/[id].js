import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";

export default function Product() {
    const [product, setProduct] = useState();
    const [sizeReviews, setSizeReviews] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    async function getProduct(targetId) {
        const response = await axios.get(`/products/${targetId}`);
        const nextProduct = response.data;
        setProduct(nextProduct);
    }

    async function getSizeReviews(targetId) {
        const response = await axios.get(`/size_reviews/?product_id=${targetId}`);
        const nextSizeReviews = response.data ?? [];
        setSizeReviews(nextSizeReviews);
    }

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img
                src={product.imgUrl}
                alt={product.name}
            />
            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
}