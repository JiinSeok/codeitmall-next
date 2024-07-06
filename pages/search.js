import { useRouter } from 'next/router';
import SearchForm from "@/components/SearchForm";

export default function Search() {
    const router = useRouter();
    const { keyword } = router.query;

    return (
        <div>
            <h1>Search</h1>
            <SearchForm initialKeyword={keyword} />
            <h2>{keyword} 검색 결과</h2>
        </div>
    );
}