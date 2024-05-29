import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Search from './components/Search';
import index from './searchIndex';
import terms from './terms.json';
import EntryPage from './EntryPage';
import Navbar from './components/Navbar'; // Import the Navbar

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

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
      <Navbar /> {/* Add the Navbar */}
      <div>
        <h2>Search the Education DAO Glossary:</h2>
      </div>
      <Search onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              {searchResults.map((result) => (
                <li
                  key={result.term}
                  onClick={() => navigate(`/term/${encodeURIComponent(result.term)}`)}
                  style={{
                    cursor: allTerms.includes(result.term) ? 'pointer' : 'default',
                  }}
                >
                  {result.term}
                </li>
              ))}
            </ul>
          }
        />
        <Route path="/term/:termKey" element={<EntryPage />} />
      </Routes>
    </div>
  );
}

export default App;
