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

function getTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let currentTime;
  let period;
  if (hours > 12) {
    hours = hours - 12;
    period = "pm";
  } else if (hours === 12) {
    period = "pm";
  } else {
    period = "am";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  currentTime = `${hours}:${minutes} ${period}`;
  return currentTime;
}
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
        certainty: detectedLanguage.resultConfidence,
        time: getTime(),
      },
    ]);
    setInputedText("");
    setInputError(null);
    setTyping(false);
  }

  async function handleTranslate(text) {
    try {
      const translatedText = await handleTranslator(text, selectedLanguage);
      const detectedLang = await handleLanguageDetector(translatedText);
      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: translatedText,
          detectedLanguage: null,
          detectedCode: detectedLang.detectedLanguage,
          certainty: null,
          time: getTime(),
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
          time: getTime(),
        },
      ]);

      const summarizedText = await handleSummarizer(params);

      const detectedLang = await handleLanguageDetector(summarizedText);

      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: summarizedText,
          detectedLanguage: detectedLang.fullDetectedLanguage,
          detectedCode: detectedLang.detectedLanguage,
          certainty: detectedLang.certainty,
          time: getTime(),
        },
      ]);
    } catch (error) {
      console.error("Error during summarization:", error);

      const fallbackMessage =
        "Sorry, we are unable to return your summary at this time.";
      const detectedLang = await handleLanguageDetector(fallbackMessage);

      setChatInteractions((prevState) => [
        ...prevState,
        {
          type: "bot",
          message: fallbackMessage,
          detectedLanguage: detectedLang.fullDetectedLanguage,
          detectedCode: detectedLang.detectedLanguage,
          certainty: null,
          time: getTime(),
        },
      ]);
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
    <section
      className="relative flex-1 min-h-full flex flex-col items-center p-2 md:p-8 pb-2"
      aria-live="assertive"
    >
      <div
        style={{
          background: `linear-gradient(60deg,#00000053,transparent,#00000083),url(${chatBackgrounds[interfaceBackground]})`,
        }}
        className="background"
        onClick={() => {
          setNavigationContentIndex(0);
        }}
      ></div>
      <div className="flex flex-col gap-10 w-full mt-20 mb-[150px] md:pl-[100px]">
        {!!chatInteractions.length &&
          chatInteractions.map((interaction, index) => (
            <div
              key={index}
              className="z-10 space-y-2"
              style={{
                marginLeft: interaction.type === "user" && "auto",
                marginRight: interaction.type !== "user" && "auto",
              }}
            >
              <p className="font-itim text-white text-lg py-1 px-2 w-fit rounded-full bg-[#00000088]">
                {interaction.time}
              </p>
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

      {!!isTyping && (
        <LoadSignal
          marginLeft="auto"
          source={userAvatar}
          label="user is typing"
        />
      )}

      {!!isLoading && (
        <LoadSignal
          flexDirection="row-reverse"
          marginRight="auto"
          classname="bot"
          source="linguaSwift-logo.png"
          label="Response Loading..."
        />
      )}

      <div
        className="w-full md:w-[80%] flex justify-center fixed bottom-[10px] z-50"
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
          className="text-lg text-red-700 font-black font-autour z-50 bg-[#ffffff99] p-2 rounded-full absolute bottom-[20px]"
          role="status"
          aria-live="polite"
        >
          {inputError}
        </p>
      )}
    </section>
  );
}
