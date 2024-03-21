const fs = require('fs');

// Read the JSON file
fs.readFile('consensys-termbase.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const terms = JSON.parse(data);
    const exportDefinitions = {};

    // Iterate over each term
    for (const termData of terms) {
      const englishTerm = termData['Term'];

      // Create object for definitions.js
      const definitionObj = {
        term: englishTerm,
        phonetic: '', // You may need to update this if phonetic is available in the JSON
        partOfSpeech: '', // You may need to fill this later
        description: termData['Definition'], // Using 'Definition' field as description
        termCategory: termData['Term category'] || '', // Using 'Term category' field if available
        i18n: {},
      };

      // Add translations to i18n field
      for (const [lang, translation] of Object.entries(termData)) {
        if (lang !== 'English term' && lang !== 'Definition' && lang !== 'Term category') {
          definitionObj.i18n[lang] = translation;
        }
      }

      // Add the object to exportDefinitions
      exportDefinitions[englishTerm] = definitionObj;
    }

    // Write the exportDefinitions object to export-definitions.js
    const exportContent = `const exportDefinitions = ${JSON.stringify(exportDefinitions, null, 2)};\n\nexport default exportDefinitions;`;

    fs.writeFile('export-definitions.js', exportContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing export-definitions.js file:', err);
        return;
      }
      console.log('export-definitions.js file has been successfully created.');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
