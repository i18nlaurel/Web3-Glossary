const fs = require('fs');

// Read the multilingual glossary JSON file
const glossaryData = JSON.parse(fs.readFileSync('./../data/consensys-termbase.json'));

// Initialize an array to hold the generated JavaScript definitions
const generatedDefinitions = [];

// Iterate over the glossary data
Object.keys(glossaryData).forEach(key => {
    const term = glossaryData[key];
    const definition = {
        word: term['English term'],
        translations: {}
    };

    // Add translations for each language
    Object.keys(term).forEach(lang => {
        if (lang !== 'English term') {
            definition.translations[lang] = term[lang];
        }
    });

    // Push the definition to the generated definitions array
    generatedDefinitions.push(definition);
});

// Generate JavaScript code
const generatedCode = `const glossary = ${JSON.stringify(generatedDefinitions, null, 2)};\n\nexport default glossary;`;

// Write the generated code to a JavaScript file
fs.writeFileSync('generated_definitions.js', generatedCode);
