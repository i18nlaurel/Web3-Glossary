import React, { useState } from 'react';
import Search from './components/Search';
import index from './searchIndex';
import terms from './terms';
import linkedDefinitions from './linked-definitions';
import EntryPage from './entryPage';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    const results = index.search(query);
    console.log('Search results:', results);
    const formattedResults = results.map((result) => ({
      term: result.ref,
    }));
    setSearchResults(formattedResults);
    console.log('Updated searchResults:', formattedResults);
  };

  const allTerms = Object.keys(terms["0"]["terms"]);

  return (
    <div>
      <div>
        <h2> Search the Education DAO Glossary:
          <br />
          <br />
        </h2>
      </div>
      <Search onSearch={handleSearch} />
      {selectedTerm ? (
        <EntryPage termKey={selectedTerm} />
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li
              key={result.term}
              onClick={() => setSelectedTerm(result.term)}
              style={{
                cursor: allTerms.includes(result.term) ? 'pointer' : 'default',
              }}
            >
              {result.term}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;