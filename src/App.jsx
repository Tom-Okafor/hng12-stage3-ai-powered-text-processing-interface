import { useEffect } from "react";
import { handleLanguageDetector } from "./utils/handleLanguageDetector";

function App() {
  const text = `Mochten Sie einen Text in einer anderen Sprache haben? Hier ist eine kurze Nachricht:

Le soleil
`;
  useEffect(() => {
    async function checkAvailability() {
      console.log(await handleLanguageDetector(text));
    }
    checkAvailability();
  }, [text]);
  return (
    <>
      <h1>Text processing interface</h1>
    </>
  );
}

export default App;
