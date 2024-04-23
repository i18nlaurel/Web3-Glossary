import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import Term from './termStruct';

const EntryPage = ({ term, linkedTerms }) => {
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchDefinition = () => {
      const termDefinition = linkedTerms[term];
      if (termDefinition) {
        setDefinition(termDefinition);
      } else {
        setDefinition(null); // or handle the case where the term is not found
      }
    };
  
    fetchDefinition();
  }, [term, linkedTerms]);

  if (!definition) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumbs segments={[term]} />
      <Term
        term={term}
        definition={definition.definition}
        phonetic={definition.phonetic}
        partOfSpeech={definition.partOfSpeech}
      />
    </>
  );
};

export default EntryPage;