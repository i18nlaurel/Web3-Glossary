import definitions from "./definitions";
import Definition from "./Definition";
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
  if (!(word in definitions) || currentPath.length === 0) {
    word = DEFAULT;
    window.location.pathname = `/${DEFAULT}`;
  }
  const definition = definitions[word];

  return (
    <>
      <Breadcrumbs segments={currentPath} />

      <Definition
        word={word}
        description={definition.description}
        phonetic={definition.phonetic}
        partOfSpeech={definition.partOfSpeech}
      />
    </>
  );
}

export default App;
