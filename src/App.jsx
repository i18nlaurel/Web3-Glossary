import React, { useState, useEffect } from "react";
import Search from './components/Search';
import index from './searchIndex';
import terms from "./terms";
import Term from "./termStruct";
import { urlToPath } from "./Link";
import { Breadcrumbs } from "./Breadcrumbs";
import './i18n/config';
import './reset.css';
import './index.css';
import EntryPage from './entryPage';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleSearch = (query) => {
    console.log('Searching for:', query); // Log the search query
    const results = index.search(query);
    console.log('Search results:', results); // Log the search results
    const formattedResults = results.map((result) => ({
      term: result.ref,
      // Add any additional information you want to display in the search results list
    }));
    setSearchResults(formattedResults);
    console.log('Updated searchResults:', formattedResults); // Log the updated searchResults
  };  

  return (
    <div>
      <Search onSearch={handleSearch} />
      {selectedTerm ? (
        <EntryPage term={selectedTerm} /> // Render the EntryPage component with the selected term
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.term} onClick={() => setSelectedTerm(result.term)}>
              {result.term}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;