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
    for (const term of terms) {
      const englishTerm = term['English term'];

      // Create object for definitions.js
      const definitionObj = {
        phonetic: '', // You may need to update this if phonetic is available in the JSON
        description: term['Definition'], // Using 'Definition' field as description
        // Other languages can be added here based on your requirements
        // e.g., French: term['French'], Spanish: term['Spanish'], etc.
      };

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
