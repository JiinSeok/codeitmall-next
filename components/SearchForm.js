import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({ initialQuery='' }) {
    const router = useRouter();
    const [query, setQuery] = useState(initialQuery);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (query === '') {
            router.push('/');
            return;
        }
        router.push(`/search?q=${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="q" value={query} onChange={handleChange} />
            <button>검색</button>
        </form>
    );
}
