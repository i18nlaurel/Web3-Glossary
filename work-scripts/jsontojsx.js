const fs = require('fs');

// Read the multilingual glossary JSON file
const glossaryData = JSON.parse(fs.readFileSync('./../data/consensys-termbase.json'));

// Initialize an object to hold the generated JavaScript definitions
const generatedDefinitions = {};

// Iterate over the glossary data
Object.keys(glossaryData).forEach(key => {
    const term = glossaryData[key];
    const translations = {};

    // Add translations for each language
    Object.keys(term).forEach(lang => {
        if (lang !== 'English term' && lang !== "Brand/project name") {
            translations[lang] = term[lang];
        }
    });

    // Create the JSX-like string for the definition
    let definition = term["Consensys' Definition"];
    definition = definition.replace(/<([^<>]+)>/g, "&lt;$1&gt;");
    definition = definition.replace(/\n/g, "<br>");

    // Create the definition object
    const englishTerm = term["English term"];
    generatedDefinitions[englishTerm] = {
        phonetic: "", // Add phonetic if available
        partOfSpeech: "", // Add part of speech if available
        definition: `'${definition}'`,
        locales: translations
    };

    // Add Brand/project name if available
    if (term["Brand/project name"]) {
        generatedDefinitions[englishTerm]["brandOrProjectName"] = term["Brand/project name"];
    }
});

// Generate JavaScript code
const generatedCode = `const glossary = ${JSON.stringify(generatedDefinitions, null, 2)};\n\nexport default glossary;`;

// Write the generated code to a JavaScript file
fs.writeFileSync('generated_definitions.js', generatedCode);
