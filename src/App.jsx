import { useEffect } from "react";
import { handleLanguageDetector } from "./utils/handleLanguageDetector";
import { handleTranslator } from "./utils/handleTranslator";
import { handleSummarizer } from "./utils/handleSummarizer";

function App() {
  const text = `Mochten Sie einen Text in einer anderen Sprache haben? Hier ist eine kurze Nachricht:

Le soleil
`;
  const translateText = `Güneş batarken, şehir altın bir ışıkla yıkanıyordu. Çocuklar parklarda oynarken, yetişkinler hareketli sokaklarda dolaşıyordu. Hafif bir esinti, bahar çiçeklerinin kokusunu getirerek huzurlu ve sakin bir atmosfer yaratıyordu.

`;

  const summarizeText = `The Midnight Visitor

Every night at midnight, the old lighthouse by the sea would flicker to life, its beam cutting through the dark waves. The townsfolk spoke of ghostly tales and whispered about the mysterious keeper who never seemed to age.

One stormy night, a young sailor named Jack sought refuge from the raging sea. As he approached the lighthouse, the heavy door creaked open, and he was greeted by an elderly man with a kind smile and eyes that held centuries of stories.

"Come in, lad," the old man said, his voice warm and inviting. Jack entered, grateful for the shelter. Inside, the lighthouse was filled with maps, ancient artifacts, and a strange, almost magical aura.

As the storm raged outside, the old man shared stories of his time as a lighthouse keeper, of ships saved from certain doom and of the spectral visitors who came to thank him. Jack listened, captivated by the tales, and felt a deep sense of comfort.

Midnight struck, and the lighthouse's beam flickered once more. Jack noticed that the old man seemed to grow more translucent with each passing minute. "Who are you?" Jack asked, his voice trembling.

The old man smiled. "I am a guardian of the sea, a keeper of memories," he replied. "My time here is bound to the light, and as long as it shines, so do I."

As dawn approached, the old man faded into the mist, leaving Jack alone in the lighthouse. The storm had passed, and the sea was calm. Jack knew he had witnessed something extraordinary, a glimpse into the realm of the unseen. He left the lighthouse with a newfound respect for the mysteries of the sea and the timeless guardians who watched over it.`;

  useEffect(() => {
    async function checkAvailability() {
      try {
        console.log(await handleLanguageDetector(translateText));
        console.log(await handleTranslator(translateText, "en"));
        console.log(await handleSummarizer(summarizeText));
      } catch (error) {
        console.error(error);
      }
    }

    checkAvailability();
  }, [summarizeText, translateText]);
  return (
    <>
      <h1>Text processing interface</h1>
    </>
  );
}

export default App;
