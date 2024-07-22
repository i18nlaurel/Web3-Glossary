// src/EntryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import terms from './terms.json';
import { linkTermsInDefinition } from './utils/linkTerms';

const EntryPage = () => {
  const { termKey } = useParams();
  console.log("Term Key:", termKey);

  const termData = terms[0]?.terms[termKey];
  console.log("Term Data:", termData);

  if (!termData) {
    return <div>Term not found</div>;
  }

  const linkedDefinition = linkTermsInDefinition(termData.definition, terms[0].terms);
  console.log("Linked Definition:", linkedDefinition);

  return (
    <div>
      <h1>{termData.term}</h1>
      <p>{termData.phonetic}</p>
      <p><strong>Category:</strong> {termData.termCategory}</p>
      <p dangerouslySetInnerHTML={{ __html: linkedDefinition }}></p>
    </div>
  );
};

export default EntryPage;
