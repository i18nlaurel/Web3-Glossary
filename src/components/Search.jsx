// src/components/Search.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Search = ({ onSearch }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={t('Search')} // Use translation for placeholder
      />
      <button onClick={handleSearch}>{t('Search')}</button> {/* Use translation for button text */}
    </div>
  );
};

export default Search;
