import React, {useState} from 'react';
import Search from "./Search";

export default function SearchBar() {
    const [searches, setSearches] = useState([]);
    const [newSearch, setNewSearch] = useState("");
    const handleNewSearch = () => {
        setSearches(prevSearches => [...prevSearches, newSearch]);
        setNewSearch("");
    }
    return (
        <div className="search-bar">
            <div className="search-list">
                {searches?.map(search => <Search 
                    search={search} 
                    undo={() => setSearches(searches.filter(search2 => {
                        return search2 !== search;
                    }))} />
                )}
            </div>
            <input type="text" onChange={e => setNewSearch(e.target.value)} />
            <button onClick={() => handleNewSearch()}>Submit</button>
            <button>Clear</button>
        </div>
    )
} 
