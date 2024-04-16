import terms from "./terms";
import Term from "./termStruct";
import { useState, useEffect } from "react";
import { urlToPath } from "./Link";
import { Breadcrumbs } from "./Breadcrumbs";

const DEFAULT = "permissionless distribution";

function App() {
  const [currentPath, setCurrentPath] = useState(urlToPath());
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(urlToPath());
    };
    window.addEventListener("navigate", onLocationChange);
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("navigate", onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  let word = currentPath.length > 0 ? currentPath.at(-1) : DEFAULT;
  if (!(word in terms) || currentPath.length === 0) {
    word = DEFAULT;
    window.location.pathname = `/${DEFAULT}`;
  }
  const term = terms[word];

  return (
    <>
      <Breadcrumbs segments={currentPath} />

      <Term
        word={word}
        definition={term.definition}
        phonetic={definition.phonetic}
        partOfSpeech={term.partOfSpeech}
      />
    </>
  );
}

export default App;
