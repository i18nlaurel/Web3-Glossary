import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import terms from './terms.json';
import linkedDefinitions from './linked-definitions';
import Definition from './components/Definition';

const EntryPage = ({ termKey }) => {
  const [term, setTerm] = useState(null);
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchTermData = () => {
      const termData = terms["0"]["terms"][termKey];
      const termDefinition = linkedDefinitions[termKey]?.definition;

      if (termData && termDefinition) {
        setTerm(termData.term);
        setDefinition(termDefinition);
      } else {
        setTerm(null);
        setDefinition(null);
      }
    };

    fetchTermData();
  }, [termKey]);

  if (!term || !definition) {
    return <div>Term not found</div>;
  }

  return (
    <>
      <div>
        <h2>Results:</h2>
        <br />
        <br />
      </div>
      <Breadcrumbs segments={[term]} />
      <h1>{term}</h1>
      <Definition definition={definition} />
    </>
  );
};

export default EntryPage;
