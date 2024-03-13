import { Link } from "./Link";
import "./Definition.css";

const definitions = {
  "permissionless distribution": {
    phonetic: "pɝˈmɪʃənˈɫɛs ˌdɪstɹəbˈjuʃən",
    description: (
      <>
        <Link to="permissionless">permissionless</Link> system in which each
        actor maintains <Link to="sovereignty">sovereignty</Link> over the
        ability of <Link to="publishing">publishing</Link> a new medium and of{" "}
        <Link to="distribution">distribution</Link> of every medium
      </>
    ),
  },
  distribution: {
    phonetic: "ˌdɪstɹəbˈjuʃən",
    partOfSpeech: "noun",
    description: (
      <>
        process of delivering a <Link to="publishing">published</Link> medium to
        a consumer
      </>
    ),
  },
  publishing: {
    phonetic: "ˈpəbɫɪʃɪŋ",
    partOfSpeech: "noun",
    description: <>process of making a medium available to the public</>,
  },
  permissionless: {
    phonetic: "pɝˈmɪʃənˈɫɛs",
    partOfSpeech: "adjective",
    description: (
      <>
        property of a system whose participants maintain{" "}
        <Link to="equality">equal</Link>{" "}
        <Link to="sovereignty">sovereignty</Link> over the defined scope of the
        system.
      </>
    ),
  },
  sovereignty: {
    phonetic: "ˈsɑvɹənti",
    partOfSpeech: "noun",
    description: (
      <>
        supreme power over a scope that can be exercised without any external
        restrictions being possible
      </>
    ),
  },
  equality: {
    phonetic: "ɪˈkwɑɫəti",
    partOfSpeech: "noun",
    description: (
      <>
        state of a system in which every actor has exactly the same rights and
        responsibilities
      </>
    ),
  },
};

export default definitions;
