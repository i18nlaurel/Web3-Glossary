const fs = require('fs');
const path = require('path');
const React = require('react');

// Read the existing terms.json file
const termsFilePath = path.join(__dirname, '..', 'terms.json');
const termsFileContent = fs.readFileSync(termsFilePath, 'utf8');

// Parse the terms object from the JSON file
const jsonData = JSON.parse(termsFileContent);
const termsObject = jsonData["0"]["terms"];

// Create a set of all terms for efficient lookup
const allTerms = new Set(Object.keys(termsObject));

// Function to create a Link component for a term
const createLink = (term) => `<Link to="${term}">${term}</Link>`;

// Function to replace term occurrences with Link components
const parseDefinition = (definition, terms) => {
  const termRegex = new RegExp(`\\b(${Object.keys(terms).join('|')})\\b`, 'gi');

  if (typeof definition === 'string') {
    return definition.replace(termRegex, (match, term) => createLink(term));
  }

  const linkedDefinition = React.Children.map(definition, (child) => {
    if (typeof child === 'string') {
      return child.replace(termRegex, (match, term) => createLink(term));
    }
    return child;
  });

  return linkedDefinition;
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
)
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')};\n\nexport default linkedDefinitions;`;

// Write the linked-definitions.jsx file
const outputFilePath = path.join(__dirname, 'linked-definitions.jsx');
fs.writeFileSync(outputFilePath, linkedDefinitionsFileContent);

console.log('Linked definitions generated successfully!');