import { handleLanguageDetector } from "./handleLanguageDetector";

export async function handleTranslator(text, targetLanguage) {
  // check if the translator api is supported
  if (!("Translator" in self)) return "Sorry this feature is not suppported.";

  // check if the translator api is available to use
  //   const translatorCapabilities = await self.ai.translator.capabilities();
  //   const canTranslate = translatorCapabilities.available;
  //   if (canTranslate === "no") return "Sorry this feature is not available.";

  //   if (
  //     translatorCapabilities.languagePairAvailable(
  //       sourceLanguage,
  //       targetLanguage
  //     ) !== "readily"
  //   )
  const { detectedLanguage: sourceLanguage } = await handleLanguageDetector(
    text
  );
  const checkTranslatorAvailability = await Translator.availability({
    sourceLanguage,
    targetLanguage,
  });

  if (checkTranslatorAvailability === "unavailable")
    return "Sorry, this translation cannot be executed.";

  try {
    const translator = await Translator.create({
      sourceLanguage,
      targetLanguage,
    });
    const translatedText = await translator.translate(text);
    return translatedText;
  } catch (error) {
    throw new Error(error.message);
  }
}
