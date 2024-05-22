import React from 'react';
import { Link } from '../Link';

export const generateLinkedTerms = (terms) => {
  const linkedTerms = {};

  for (const [term, data] of Object.entries(terms)) {
    const { definition, ...rest } = data;
    linkedTerms[term] = {
      ...rest,
      definition: parseDefinition(definition, terms),
    };
  }

  return linkedTerms;
};

const parseDefinition = (definition, terms) => {
  const termRegex = new RegExp(`\\b(${Object.keys(terms).join('|')})\\b`, 'gi');

  const linkedDefinition = React.Children.map(definition, (child) => {
    if (typeof child === 'string') {
      return child.split('\n').map((line) =>
        line.replace(termRegex, (match, term) => {
          return <Link to={term}>{term}</Link>;
        })
      );
    }
    return child;
  });

  return linkedDefinition;
};