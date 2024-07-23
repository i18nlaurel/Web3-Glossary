// src/utils/linkTerms.js

import DOMPurify from 'dompurify';

export const linkTermsInDefinition = (definition, terms) => {
  const termSet = new Set(Object.keys(terms));
  let linkedDefinition = definition;

  termSet.forEach((term) => {
    const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
    // Match term in singular or plural form, optionally within double quotation marks
    const termRegex = new RegExp(`\\b("?${escapedTerm}s?"?)\\b`, 'gi'); // Case-insensitive match

    linkedDefinition = linkedDefinition.replace(termRegex, (match) => {
      // Remove surrounding quotes for linking
      const cleanMatch = match.replace(/^"|"$/g, '');
      const link = `<a href="/term/${encodeURIComponent(cleanMatch.replace(/s$/, ''))}">${cleanMatch}</a>`;
      return link;
    });
  });

  return DOMPurify.sanitize(linkedDefinition);
};
