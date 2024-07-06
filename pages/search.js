import { useRouter } from 'next/router';

export default function Search() {
    const router = useRouter();
    const { keyword } = router.query;

    return (
        <div>
            <h1>Search</h1>
            <h2>{keyword} 검색 결과</h2>
        </div>
    );
}