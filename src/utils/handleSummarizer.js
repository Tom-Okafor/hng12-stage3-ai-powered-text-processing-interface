import { handleLanguageDetector } from "../utils/handleLanguageDetector";

export async function handleSummarizer(text) {
  try {
    if (
      !("ai" in self && "summarizer" in self.ai) ||
      (await self.ai.summarizer.capabilities()).available === "no"
    )
      return "Sorry, this feature is not supported.";

    const options = {
      type: "headline",
      length: "long",
    };
    console.log((await handleLanguageDetector(text)).detectedLanguage);

    if ((await handleLanguageDetector(text)).detectedLanguage !== "en")
      return "Sorry, we are unable to summarize this language.";

    const summarizer = await self.ai.summarizer.create(options);
    const summary = await summarizer.summarize(text);
    return summary;
  } catch (error) {
    console.error("Summarization failed:", error);
    return "Sorry, we are unable to summarize your text at this moment.";
  }
}
