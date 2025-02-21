import { handleLanguageDetector } from "./handleLanguageDetector";

export async function handleTranslator(text, targetLanguage) {
  // check if the translator api is supported
  if (!("ai" in self && "translator" in self.ai))
    return "Sorry this feature is not suppported.";

  // check if the translator api is available to use
  const translatorCapabilities = await self.ai.translator.capabilities();
  const canTranslate = translatorCapabilities.available;
  if (canTranslate === "no") return "Sorry this feature is not available.";
  const { detectedLanguage: sourceLanguage } = await handleLanguageDetector(
    text
  );
  if (
    translatorCapabilities.languagePairAvailable(
      sourceLanguage,
      targetLanguage
    ) !== "readily"
  )
    return "Sorry, this translation cannot be executed.";

  try {
    const translator = await self.ai.translator.create({
      sourceLanguage,
      targetLanguage,
    });
    const translatedText = await translator.translate(text);
    return translatedText;
  } catch (error) {
    throw new Error(error.message);
  }
}
