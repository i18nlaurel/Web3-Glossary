import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import Term from './termStruct';
import terms from './terms';

const EntryPage = ({ term }) => {
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchDefinition = () => {
      const termData = terms["0"]["terms"][term];
      setDefinition(termData);
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