import React, { useEffect, useState } from 'react';
import terms from './terms';
import Term from './termStruct';
import { Breadcrumbs } from './Breadcrumbs';

const EntryPage = ({ term }) => {
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchDefinition = () => {
      const termDefinition = terms[term];
      setDefinition(termDefinition);
    };

    fetchDefinition();
  }, [term]);

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