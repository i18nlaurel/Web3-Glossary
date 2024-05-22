import "./Term.css";
import terms from "./terms.json";
import linkedDefinitions from "./linked-definitions";

function Term({ termKey }) {
  const { term, partOfSpeech, phonetic } = terms["0"]["terms"][termKey];
  const definition = linkedDefinitions[termKey]?.definition;

  if (!definition) {
    return <div>Term not found</div>;
  }

  return (
    <div className="Entry">
      <div className="declaration">
        <div className="word">{term}</div>
        <div className="grammar">
          [{phonetic}] {partOfSpeech}
        </div>
      </div>
      <div className="definition">{definition}</div>
    </div>
  );
}

export default Term;