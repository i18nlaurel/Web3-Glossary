import React, { useEffect, useState } from 'react';
import definitions from './definitions';
import Definition from './Definition';
import { Breadcrumbs } from './Breadcrumbs';

const EntryPage = ({ term }) => {
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchDefinition = async () => {
      const termDefinition = await fetchTermDefinition(term);
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
      <Definition
        word={term}
        description={definition.description}
        phonetic={definition.phonetic}
        partOfSpeech={definition.partOfSpeech}
      />
    </>
  );
};

const fetchTermDefinition = async (term) => {
  // Fetch the definition for the given term from your data source
  // You can use the `definitions` object or any other data source
  const termDefinition = definitions[term];
  return termDefinition;
};

export default EntryPage;