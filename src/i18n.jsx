// src/i18n/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Configure i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationES,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
