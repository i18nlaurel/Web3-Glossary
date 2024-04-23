const fs = require('fs');
const path = require('path');
const React = require('react');

// Read the existing terms.json file
const termsFilePath = path.join(__dirname, 'terms.json');
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
const linkedTerms = {};
for (const [term, data] of Object.entries(termsObject)) {
  const { definition, ...rest } = data;
  linkedTerms[term] = {
    ...rest,
    definition: parseDefinition(definition, termsObject),
  };
}

// Create the updated terms.jsx file with the linked definitions
const updatedTermsFileContent = `import { Link } from './Link';\nimport './Term.css';\n\nconst terms = ${JSON.stringify(
  { "0": { "terms": linkedTerms } },
  null,
  2
)};\n\nexport default terms;`;

// Write the updated terms.jsx file
const outputFilePath = path.join(__dirname, 'terms_linked.jsx');
fs.writeFileSync(outputFilePath, updatedTermsFileContent);

console.log('Linked terms generated successfully!');