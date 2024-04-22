import React, { useState, useEffect } from "react";
import Search from './components/Search';
import index from './searchIndex'; // Import the search index created earlier
import terms from "./terms";
import Term from "./termStruct";
import { urlToPath } from "./Link";
import { Breadcrumbs } from "./Breadcrumbs";
import './i18n/config'; // Import the i18n configuration
import './reset.css';
import './index.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (query) => {
    const results = index.search(query);
    setSearchResults(results);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.ref}>{result.ref}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
