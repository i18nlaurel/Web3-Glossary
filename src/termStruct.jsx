import "./Term.css";

function Term({ word, partOfSpeech, phonetic, definition }) {
  return (
    <div className="Definition">
      <div className="declaration">
        <div className="word">{word}</div>
        <div className="grammar">
          [{phonetic}] {partOfSpeech}
        </div>
      </div>
      <div className="definition">{definition}</div>
    </div>
  );
}
export default Term;
