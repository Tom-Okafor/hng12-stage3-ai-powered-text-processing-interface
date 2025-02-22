import { handleLanguageDetector } from "../utils/handleLanguageDetector";

export async function handleSummarizer(text) {
  try {
    if (
      !("ai" in self && "summarizer" in self.ai) ||
      (await self.ai.summarizer.capabilities()).available === "no"
    ) {
      console.warn("Summarizer not available.");
      return "Sorry, this feature is not supported.";
    }

    const options = {
      type: "headline",
      length: "long",
    };

    const { detectedLanguage } = await handleLanguageDetector(text);
    console.log("Detected language:", detectedLanguage);

    if (detectedLanguage !== "en") {
      return "Sorry, we are unable to summarize this language.";
    }

    async function createAndSummarize() {
      try {
        const summarizer = await self.ai.summarizer.create(options);
        const summary = await summarizer.summarize(text);
        return summary;
      } catch (error) {
        if (error.name === "InvalidStateError") {
          console.warn("InvalidStateError encountered. Retrying...");
          return createAndSummarize(); 
        }
        throw error; 
      }
    }

    return await createAndSummarize();
  } catch (error) {
    console.error("Summarization failed:", error);
    return "Sorry, we are unable to summarize your text at this moment.";
  }
}
