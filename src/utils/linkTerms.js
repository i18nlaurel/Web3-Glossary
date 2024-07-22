// src/utils/linkTerms.js

import DOMPurify from 'dompurify';

export const linkTermsInDefinition = (definition, terms) => {
  const termSet = new Set(Object.keys(terms));
  let linkedDefinition = definition;
  termSet.forEach((term) => {
    const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
    const termRegex = new RegExp(`\\b${escapedTerm}\\b`, 'i'); // Case-insensitive match
    if (termRegex.test(linkedDefinition)) {
      linkedDefinition = linkedDefinition.replace(termRegex, (match) => {
        const link = `<a href="/term/${encodeURIComponent(term)}">${term}</a>`;
        return link;
      });
    }
  });
  return DOMPurify.sanitize(linkedDefinition);
};
