import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';
import Image from 'next/image';
import styles from '@/styles/Product.module.css';

export async function getStaticPaths() {
  // 동적인 페이지를 정적생성할 때 어떤 페이지를 생성할지 정해준다.
  const res = await axios.get('/products');
  const products = res.data.results;
  const paths = products.map((product) => ({
    params: { id: String(product.id) }, // 사이트 주소 문자열
  }));

  return {
    paths,
    fallback: true, // 없는 경로 처리 방법 (그때 getStaticProps 실행할지)
  };
}

export async function getStaticProps(context) {
  // 정적 생성 과정에서 제공되는 페이지 생성 정보 context 객체를 받을 수 있다.
  const productId = context.params['id'];
  let product;

  try {
    const response = await axios.get(`/products/${productId}`);
    product = response.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getSizeReviews(targetId) {
    const response = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = response.data ?? [];
    setSizeReviews(nextSizeReviews);
  }

  useEffect(() => {
    if (id) {
      getSizeReviews(id);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // 정적 생성 안 되어 있을 때 나타날 로딩 화면
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div className={styles.image}>
        <Image fill src={product.imgUrl} alt={product.name} />
      </div>
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
