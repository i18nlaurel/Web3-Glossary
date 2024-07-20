const fs = require('fs');
const path = require('path');

const termsFilePath = path.join(__dirname, './consensys-termbase.json');
const localesDir = path.join(__dirname, './../src/i18n', 'locales');

const termsData = JSON.parse(fs.readFileSync(termsFilePath, 'utf8'));

for (const term of termsData) {
  const i18nData = Object.entries(term).filter(([key]) => key !== 'Term' && key !== 'Definition' && key !== 'Term category');

  for (const [locale, translation] of i18nData) {
    const localeDir = path.join(localesDir, locale.toLowerCase());
    const translationFilePath = path.join(localeDir, 'translation.json');

    try {
      // Create the locale directory if it doesn't exist
      if (!fs.existsSync(localeDir)) {
        fs.mkdirSync(localeDir, { recursive: true });
        console.log(`Created directory: ${localeDir}`);
      }

      // Read the existing translation file or create a new one
      let translationData = {};
      if (fs.existsSync(translationFilePath)) {
        translationData = JSON.parse(fs.readFileSync(translationFilePath, 'utf8'));
      } else {
        fs.writeFileSync(translationFilePath, '{}');
        console.log(`Created file: ${translationFilePath}`);
      }

      // Add or update the term translation in the translation data
      translationData[term.Term] = translation;

      // Write the updated translation data to the file
      fs.writeFileSync(translationFilePath, JSON.stringify(translationData, null, 2));
      console.log(`Added term "${term.Term}" to ${translationFilePath}`);
    } catch (err) {
      console.error(`Error processing term "${term.Term}" for locale "${locale}":`, err);
    }
  }
}