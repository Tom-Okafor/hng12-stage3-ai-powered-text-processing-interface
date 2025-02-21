import { useContext, useState, useEffect } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { chatBackgrounds } from "../../../constants";
import { handleLanguageDetector } from "../../../utils/handleLanguageDetector";
import { handleTranslator } from "../../../utils/handleTranslator";
import { handleSummarizer } from "../../../utils/handleSummarizer.js";
import SendButton from "./SendButton.jsx";
import LoadSignal from "./LoadSignal.jsx";
import TextArea from "./TextArea.jsx";
import UserMessageBlock from "./UserMessageBlock.jsx";
import BotMessageBlock from "./BotMessageBlock.jsx";

export default function ChatInterfaceMain() {
  const {
    interfaceBackground,
    interfaceThemeColor,
    chatInteractions,
    setChatInteractions,
    userAvatar,
  } = useContext(ChatInterfaceContext);
  const { setNavigationContentIndex } = useContext(NavigationContentContext);
  const [inputedText, setInputedText] = useState("");
  const [inputError, setInputError] = useState(null);
  const [isTyping, setTyping] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  async function handleSubmit() {
    if (inputedText.trim() === "") {
      setInputError("Please enter a message");
      return;
    }
    const detectedLanguage = await handleLanguageDetector(inputedText);
    detectedLanguage.detectedLanguage === "en" && setSelectedLanguage("pt");
    setChatInteractions((prevState) => [
      ...prevState,
      {
        type: "user",
        message: inputedText,
        detectedLanguage: detectedLanguage.fullDetectedLanguage,
        detectedCode: detectedLanguage.detectedLanguage,
        certainty: `${detectedLanguage.resultConfidence}%`,
      },
    ]);
    setInputedText("");
    setInputError(null);
    setTyping(false);
  }

  async function handleTranslate(text) {
    console.log(text);
    try {
      const translatedText = await handleTranslator(text, selectedLanguage);
      console.log(translatedText);
      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: translatedText,
          detectedLanguage: null,
          detectedCode: null,
          certainty: null,
        },
      ]);
    } catch (error) {
      throw error.message;
    } finally {
      setLoading(false);
    }
  }

  async function handleSummarize(params) {
    try {
      setLoading(true);
      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: "Please wait. This may take a while...",
          detectedLanguage: null,
          detectedCode: null,
          certainty: null,
        },
      ]);
      const summarizedText = await handleSummarizer(params);
      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: summarizedText,
          detectedLanguage: null,
          detectedCode: null,
          certainty: null,
        },
      ]);
    } catch (error) {
      throw error.message;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [chatInteractions, isTyping, isLoading]);

  return (
    <section className="relative flex-1 min-h-full flex flex-col items-center p-8 pb-2">
      <div
        style={{
          background: `linear-gradient(60deg,#00000053,transparent,#00000083),url(${chatBackgrounds[interfaceBackground]})`,
        }}
        className="background"
        onClick={() => {
          setNavigationContentIndex(0);
        }}
      ></div>
      <div className="flex flex-col gap-8 w-full mt-20 mb-[150px] pl-[100px]">
        {!!chatInteractions.length &&
          chatInteractions.map((interaction, index) => (
            <div
              key={index}
              className="z-10"
              style={{
                marginLeft: interaction.type === "user" && "auto",
                marginRight: interaction.type !== "user" && "auto",
              }}
            >
              {interaction.type === "user" ? (
                <UserMessageBlock
                  interaction={interaction}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  handleSummarize={handleSummarize}
                  handleTranslate={handleTranslate}
                  setLoading={setLoading}
                />
              ) : (
                <BotMessageBlock interaction={interaction} />
              )}
            </div>
          ))}
      </div>

      {!!isTyping && <LoadSignal marginLeft="auto" source={userAvatar} />}

      {!!isLoading && (
        <LoadSignal
          flexDirection="row-reverse"
          marginRight="auto"
          padding="100px"
          source="linguaSwift-logo.png"
        />
      )}

      <div
        className="w-[80%] flex justify-center fixed bottom-[10px] z-50"
        style={{
          borderColor: interfaceThemeColor,
        }}
      >
        <TextArea
          setSelectedLanguage={setSelectedLanguage}
          setInputError={setInputError}
          setInputedText={setInputedText}
          setTyping={setTyping}
          inputedText={inputedText}
          handleSubmit={handleSubmit}
          setNavigationContentIndex={setNavigationContentIndex}
        />

        <SendButton
          handleSubmit={handleSubmit}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>

      {inputError && (
        <p
          className="text-lg text-red-700 font-black font-autour z-50 bg-[#ffffff99] p-2 rounded-full mb-2"
          role="alert"
          aria-live="polite"
        >
          {inputError}
        </p>
      )}
    </section>
  );
}
