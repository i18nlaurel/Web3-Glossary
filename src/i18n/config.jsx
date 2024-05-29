import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/es/translation.json';
// Import other languages if needed

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
      // Add other languages here
    },
    lng: 'en', // default language
    lngs: ['en', 'es', 'ar', 'de', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pt-br', 'ru', 'th', 'tl', 'tr', 'uk', 'vi', 'zh-cn'], // List of languages to generate translation files for
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
