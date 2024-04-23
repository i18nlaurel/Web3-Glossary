const fs = require('fs');
const path = require('path');
const React = require('react');
const babel = require('@babel/core');

// Read the existing terms.jsx file
const termsFilePath = path.join(__dirname, 'terms.jsx');
const termsFileContent = fs.readFileSync(termsFilePath, 'utf8');

// Split the file content by the 'const terms = {' string
const contentParts = termsFileContent.split('const terms = {');

// Check if the split was successful
if (contentParts.length < 2) {
  console.error('Error: Could not find the terms object in the file.');
  return;
}

// Get the terms object string
const termsObjectString = `{${contentParts[1].split('}')[0]}}`;

// Transpile the terms object string with Babel
const { code: transpiled } = babel.transformSync(termsObjectString, {
  presets: ['@babel/preset-react'],
  parserOpts: {
    plugins: ['jsx'],
  },
});

// Parse the transpiled terms object
const termsObject = eval(`(${transpiled})`);

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
  linkedTerms,
  null,
  2
)};\n\nexport default terms;`;

// Write the updated terms.jsx file
const outputFilePath = path.join(__dirname, 'terms_linked.jsx');
fs.writeFileSync(outputFilePath, updatedTermsFileContent);

console.log('Linked terms generated successfully!');