import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import terms from './terms.json';
import linkedDefinitions from './linked-definitions.jsx';

function EntryPage() {
  const { termKey } = useParams();
  const [termContent, setTermContent] = useState(null);

  useEffect(() => {
    const termData = terms.find(term => term.terms[termKey]);
    if (termData) {
      setTermContent(termData.terms[termKey]);
    } else {
      console.error(`Term "${termKey}" not found`);
    }
  }, [termKey]);

  if (!termContent) {
    return <div>Loading...</div>;
  }

  const linkedDefinition = linkedDefinitions[termKey]?.definition || termContent.definition;

  return (
    <div>
      <h1>{termContent.term}</h1>
      <h3>{termContent.phonetic}</h3>
      <h4>Category: {termContent.termCategory}</h4>
      <p>{linkedDefinition}</p>
      {/* Render other content based on term data */}
    </div>
  );
}

export default EntryPage;
