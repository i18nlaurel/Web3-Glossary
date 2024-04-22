import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', query); // Log the search query
    onSearch(query); // Call the onSearch prop with the search query
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;