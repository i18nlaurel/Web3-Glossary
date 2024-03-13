// src/App.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hello_world')}</h1>
      <LanguageSwitcher />
    </div>
  );
};

export default App;
