const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Read the existing terms.json file
const termsFilePath = path.join(__dirname, './../', 'terms.json');
const termsFileContent = fs.readFileSync(termsFilePath, 'utf8');

// Parse the terms object from the JSON file
const jsonData = JSON.parse(termsFileContent);
const termsObject = jsonData["0"]["terms"];

// Function to create a Link component for a term
const createLink = (term) => React.createElement(
  'Link',
  { to: `/${term}`, key: term },
  term + ' ' // Add a space after the term
);


const parseDefinition = (definition, terms) => {
  const termRegex = new RegExp(`\\b(${Object.keys(terms).join('|')})\\b`, 'gi');

  if (typeof definition === 'string') {
    // Trim excess spaces from the definition
    definition = definition.trim().replace(/\s+/g, ' ');
    
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
  const parsedDefinition = parseDefinition(data.definition, termsObject);
  linkedDefinitions[term] = {
    definition: renderToStaticMarkup(parsedDefinition),
  };
}

// Convert the linked definitions to a string suitable for a .jsx file
const escapeSpecialChars = (str) => str.replace(/"/g, '\\"').replace(/\n/g, '\\n');

const linkedDefinitionsJSX = `import React from 'react';
import { Link } from './Link';

const linkedDefinitions = {
${Object.entries(linkedDefinitions).map(([term, data]) => (
  `  "${term}": {
    definition: <>${escapeSpecialChars(data.definition)}</>,
  }`
)).join(',\n')}
};

export default linkedDefinitions;`;

// Write the linked-definitions.jsx file
const outputFilePath = path.join(__dirname, 'linked-definitions.jsx');
fs.writeFileSync(outputFilePath, linkedDefinitionsJSX);

console.log('Linked definitions generated successfully!');
