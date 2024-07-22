import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import index from './searchIndex';
import terms from './terms.json';
import EntryPage from './EntryPage';
import Navbar from './components/Navbar';
import Home from './Home';
import { useTranslation } from 'react-i18next';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const allTerms = Object.keys(terms[0].terms);

  const handleLogoClick = () => {
    setSearchResults([]);
    navigate('/');
  };

  const handleNewSearch = () => {
    setSearchResults([]);
    navigate('/');
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      const query = searchResults[0].term; // Reuse the last search query
      handleSearch(query);
    }
  }, [i18n.language]);

  return (
    <div>
      <Navbar onLogoClick={handleLogoClick} />
      <Routes>
        <Route path="/" element={<Home onSearch={handleSearch} />} />
        <Route path="/term/:termKey" element={<EntryPage onNewSearch={handleNewSearch} />} />
      </Routes>
      {searchResults.length > 0 && (
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
      )}
    </div>
  );
}

export default App;
