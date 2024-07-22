// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import arTranslation from './locales/ar/translation.json';
import deTranslation from './locales/de/translation.json';
import frTranslation from './locales/fr/translation.json';
import idTranslation from './locales/id/translation.json';
import itTranslation from './locales/it/translation.json';
import jaTranslation from './locales/ja/translation.json';
import koTranslation from './locales/ko/translation.json';
import nlTranslation from './locales/nl/translation.json';
import ptBrTranslation from './locales/pt-br/translation.json';
import ruTranslation from './locales/ru/translation.json';
import thTranslation from './locales/th/translation.json';
import tlTranslation from './locales/tl/translation.json';
import trTranslation from './locales/tr/translation.json';
import ukTranslation from './locales/uk/translation.json';
import viTranslation from './locales/vi/translation.json';
import zhCnTranslation from './locales/zh-cn/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      de: {
        translation: deTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      id: {
        translation: idTranslation,
      },
      it: {
        translation: itTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
      ko: {
        translation: koTranslation,
      },
      nl: {
        translation: nlTranslation,
      },
      'pt-br': {
        translation: ptBrTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      th: {
        translation: thTranslation,
      },
      tl: {
        translation: tlTranslation,
      },
      tr: {
        translation: trTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
      vi: {
        translation: viTranslation,
      },
      'zh-cn': {
        translation: zhCnTranslation,
      },
    },
    lng: 'en', // default language
    lngs: ['en', 'es', 'ar', 'de', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pt-br', 'ru', 'th', 'tl', 'tr', 'uk', 'vi', 'zh-cn'], // List of languages
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
