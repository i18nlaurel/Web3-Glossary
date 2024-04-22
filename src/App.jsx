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
import EntryPage from './entryPage'; // Import the EntryPage component

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleSearch = (query) => {
    const results = index.search(query);
    const formattedResults = results.map((result) => ({
      term: result.ref,
      // Add any additional information you want to display in the search results list
    }));
    setSearchResults(formattedResults);
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
  {selectedTerm ? (
  <EntryPage term={selectedTerm} />
) : (
  // Render the search results list
)}
</ul>
      )}
    </div>
  );
}

export default App;