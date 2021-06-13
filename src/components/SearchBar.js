import React, {useState, useRef} from 'react';
import Search from "./Search";

export default function SearchBar() {
    const searchInput = useRef(); 
    const [searches, setSearches] = useState([]);
    const [newSearch, setNewSearch] = useState("");
    const handleNewSearch = () => {
        if (newSearch === "") return;
        setSearches(prevSearches => [...prevSearches, newSearch]);
        searchInput.current.value = "";
    }
    return (
        <div className="search-bar">
            <ul className="search-list">
                {searches?.map(search => <Search 
                    search={search} 
                    undo={() => setSearches(searches.filter(search2 => {
                        return search2 !== search;
                    }))} />
                )}
            </ul>
            <input ref={searchInput} type="text" onChange={e => setNewSearch(e.target.value)} />
            <button onClick={() => handleNewSearch()}>Submit</button>
            <button>Clear</button>
        </div>
    )
} 
