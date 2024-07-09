import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({ initialKeyword='' }) {
    const router = useRouter();
    const [value, setValue] = useState(initialKeyword);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (value === '') {
            router.push('/');
            return;
        }
        router.push(`/search?keyword=${value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="keyword" value={value} onChange={handleChange} />
            <button>검색</button>
        </form>
    );
}
