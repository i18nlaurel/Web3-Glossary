import "./Term.css";

function Term({ term, partOfSpeech, phonetic, definition }) {
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
export default Term
