export async function handleLanguageDetector(text) {
  // check if the language detector feature is supported

  if (!("ai" in self && "languageDetector" in self.ai)) {
    return "sorry, this feature is not supported";
  }

  // check if feature is available
  const languageDetectorCapabilities =
    await self.ai.languageDetector.capabilities();
  const canDetect = languageDetectorCapabilities.available;

  if (canDetect === "no")
    return "Sorry this feature is not available for your device.";

  const detector = await self.ai.languageDetector.create();

  // get the detected language and confidence level

  const result = (await detector.detect(text.trim()))[0];
  const { confidence, detectedLanguage } = result;
  const resultConfidence = (confidence * 100).toFixed(1);
  const fullDetectedLanguage = getFullNameOfDetectedLanguage(detectedLanguage);
  return { resultConfidence, fullDetectedLanguage, detectedLanguage };

  // get the readable form of detected language from the language abbreviation
  function getFullNameOfDetectedLanguage(language) {
    const languageName = new Intl.DisplayNames(["en"], { type: "language" });
    return languageName.of(language);
  }
}
