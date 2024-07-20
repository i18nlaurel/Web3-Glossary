// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="id">Bahasa Indonesia</option>
      <option value="it">Italiano</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="nl">Nederlands</option>
      <option value="pt-br">Português (Brasil)</option>
      <option value="ru">Русский</option>
      <option value="th">ไทย</option>
      <option value="tl">Tagalog</option>
      <option value="tr">Türkçe</option>
      <option value="uk">Українська</option>
      <option value="vi">Tiếng Việt</option>
      <option value="zh-cn">简体中文</option>
    </select>
  );
};

export default LanguageSwitcher;
