import React, { useState } from 'react'

interface SearchProps {
    onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className='w-full mb-[20px]'>
            <input className='w-full p-[10px] border rounded-md'
                type="text"
                placeholder='Search games...'
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search