import { useEffect } from "react";
import { handleLanguageDetector } from "./utils/handleLanguageDetector";
import { handleTranslator } from "./utils/handleTranslator";

function App() {
  const text = `Mochten Sie einen Text in einer anderen Sprache haben? Hier ist eine kurze Nachricht:

Le soleil
`;
  const translateText = `Por supuesto! Aquí tienes un texto en español:

El sol se ponía lentamente en el horizonte, bañando la ciudad con una luz dorada y cálida. Los niños jugaban en el parque, riendo y corriendo, mientras los adultos paseaban tranquilamente por las calles. Una suave brisa traía consigo el aroma de las flores de primavera, creando una atmósfera relajante y armoniosa.

Espero que disfrutes de este texto. 🌅

`;
  useEffect(() => {
    async function checkAvailability() {
      console.log(await handleLanguageDetector(translateText));
      console.log(await handleTranslator(translateText, "en"));
    }
    checkAvailability();
  }, [text, translateText]);
  return (
    <>
      <h1>Text processing interface</h1>
    </>
  );
}

export default App;
