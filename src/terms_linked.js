const fs = require('fs');
const path = require('path');
const React = require('react');

// Read the existing terms.json file
const termsFilePath = path.join(__dirname, '.', 'terms.json');
const termsFileContent = fs.readFileSync(termsFilePath, 'utf8');

// Parse the terms object from the JSON file
const jsonData = JSON.parse(termsFileContent);
const termsObject = jsonData["0"]["terms"];

// Create a set of all terms for efficient lookup
const allTerms = new Set(Object.keys(termsObject));

// Function to create a Link component for a term
const createLink = (term) => React.createElement(
  'Link',
  { to: term },
  term
);

const parseDefinition = (definition, terms) => {
  const termRegex = new RegExp(`\\b(${Object.keys(terms).join('|')})\\b`, 'gi');

  if (typeof definition === 'string') {
    const elements = definition.split(termRegex).map((part, index) => {
      if (index % 2 === 0) {
        return part;
      } else {
        const term = part ? part.trim() : '';
        if (term) {
          return createLink(term);
        } else {
          return null;
        }
      }
    }).filter(Boolean);

    return React.createElement(React.Fragment, null, ...elements);
  }

  if (React.isValidElement(definition)) {
    return definition;
  }

  return null;
};

// Generate the linked definitions
const linkedDefinitions = {};
for (const [term, data] of Object.entries(termsObject)) {
  linkedDefinitions[term] = {
    definition: parseDefinition(data.definition, termsObject),
  };
}

// Create the linked-definitions.jsx file
const linkedDefinitionsFileContent = `import { Link } from './Link';\n\nconst linkedDefinitions = ${JSON.stringify(
  linkedDefinitions,
  null,
  2
)};\n\nexport default linkedDefinitions;`;

// Write the linked-definitions.jsx file
const outputFilePath = path.join(__dirname, 'linked-definitions.jsx');
fs.writeFileSync(outputFilePath, linkedDefinitionsFileContent);

console.log('Linked definitions generated successfully!');