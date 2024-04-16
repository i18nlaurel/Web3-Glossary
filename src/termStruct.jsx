import "./Term.css";

function Term({ word, partOfSpeech, phonetic, description }) {
  return (
    <div className="Definition">
      <div className="declaration">
        <div className="word">{word}</div>
        <div className="grammar">
          [{phonetic}] {partOfSpeech}
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
export default Term;
