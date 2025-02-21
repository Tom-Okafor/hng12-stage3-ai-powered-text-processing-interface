import { useContext, useState, useEffect } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { chatBackgrounds } from "../../../constants";
import { handleLanguageDetector } from "../../../utils/handleLanguageDetector";
import { handleTranslator } from "../../../utils/handleTranslator";
import { handleSummarizer } from "../../../utils/handleSummarizer.js";
import SendButton from "./SendButton.jsx";
import ActionButton from "./ActionButton.jsx";

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
              className="flex flex-col z-50 gap-1.5"
              style={{
                marginLeft: interaction.type === "user" && "auto",
                marginRight: interaction.type !== "user" && "auto",
              }}
            >
              <div
                className="flex gap-3 items-center"
                style={{
                  flexDirection:
                    interaction.type === "user" ? "row" : "row-reverse",
                }}
              >
                <div
                  className={`max-w-[400px] rounded-2xl z-30 p-4 px-8 shadow-[0px_0px_5px_3px_#777] space-y-2`}
                  style={{
                    backgroundColor: interfaceThemeColor,
                  }}
                >
                  <p className="text-lg text-black font-itim font-semi-bold">
                    {interaction.message}
                  </p>
                  {interaction.type === "user" && (
                    <>
                      <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim  tracking-wider">
                        {" "}
                        Language: {interaction.detectedLanguage}
                      </p>
                      <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim tracking-wider">
                        {" "}
                        Certainty: {interaction.certainty}
                      </p>
                    </>
                  )}
                </div>
                <img
                  src={
                    interaction.type === "user"
                      ? userAvatar
                      : "linguaSwift-logo.png"
                  }
                  alt="profile"
                  aria-hidden="true"
                  className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px]"
                  style={{ border: `3px solid ${interfaceThemeColor}` }}
                />
              </div>

              {interaction.type === "user" && (
                <div className="space-y-2">
                  <div
                    className="border-4 w-[85%] rounded-2xl bg-[#000000cc] px-4 py-2 text-white font-medium font-itim text-lg space-y-1"
                    style={{ borderColor: interfaceThemeColor }}
                  >
                    <label htmlFor="language" className="flex gap-2">
                      Translate To:
                      <select
                        id="language"
                        className="bg-[#000000cc]"
                        value={selectedLanguage}
                        onChange={(event) => {
                          setSelectedLanguage(event.target.value);
                        }}
                      >
                        <option
                          value="en"
                          disabled={interaction.detectedCode === "en"}
                        >
                          English
                        </option>
                        <option
                          value="pt"
                          disabled={interaction.detectedCode === "pt"}
                        >
                          Portuguese
                        </option>
                        <option
                          value="es"
                          disabled={interaction.detectedCode === "es"}
                        >
                          Spanish
                        </option>
                        <option
                          value="ru"
                          disabled={interaction.detectedCode === "ru"}
                        >
                          Russian
                        </option>
                        <option
                          value="tr"
                          disabled={interaction.detectedCode === "tr"}
                        >
                          Turkish
                        </option>
                        <option
                          value="fr"
                          disabled={interaction.detectedCode === "fr"}
                        >
                          French
                        </option>
                      </select>
                    </label>
                    <ActionButton
                      processFunc={handleTranslate}
                      setLoading={setLoading}
                      interaction={interaction}
                      width="100%"
                      text="Translate"
                    />
                  </div>

                  {interaction.message.length >= 150 &&
                    interaction.detectedCode === "en" && (
                      <ActionButton
                        processFunc={handleSummarize}
                        setLoading={setLoading}
                        interaction={interaction}
                        width="85%"
                        text="Summarize"
                      />
                    )}
                </div>
              )}
            </div>
          ))}
      </div>

      {!!isTyping && (
        <div className="mt-auto mb-[120px] z-10 ml-auto flex gap-4">
          <div className="*:h-[15px] *:w-[15px] *:rounded-full bg-[#000000aa] rounded-full px-4 py-2 flex gap-2 items-center justify-between">
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-2"
            ></div>
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-1"
            ></div>
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-3"
            ></div>
          </div>
          <img
            src={userAvatar}
            alt="profile"
            aria-hidden="true"
            className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px] "
            style={{ border: `3px solid ${interfaceThemeColor}` }}
          />
        </div>
      )}

      {!!isLoading && (
        <div className="mt-auto mb-[120px] z-10 mr-auto flex flex-row-reverse gap-4">
          <div className="*:h-[15px] *:w-[15px] *:rounded-full bg-[#000000aa] rounded-full px-4 py-2 flex gap-2 items-center justify-between">
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-2"
            ></div>
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-1"
            ></div>
            <div
              style={{ backgroundColor: interfaceThemeColor }}
              className="animate-lift-3"
            ></div>
          </div>
          <img
            src="linguaSwift-logo.png"
            alt="profile"
            aria-hidden="true"
            className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px] "
            style={{ border: `3px solid ${interfaceThemeColor}` }}
          />
        </div>
      )}

      <div
        className="w-[80%] flex justify-center fixed bottom-[10px] z-50"
        style={{
          borderColor: interfaceThemeColor,
        }}
      >
        <textarea
          className="border-4  w-full min-h-[100px] rounded-2xl backdrop-blur-[5px] bg-[#000000cc] focus:border-6 focus:outline-0 px-4 py-2 pr-[70px] text-white font-medium font-itim text-lg resize-none tracking-wider"
          style={{ borderColor: interfaceThemeColor }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              setSelectedLanguage("en");
              handleSubmit();
            }
          }}
          value={inputedText}
          onChange={(event) => {
            setInputError(null);
            setInputedText(event.target.value);
            setTyping(true);
          }}
          onBlur={() => {
            setTyping(false);
          }}
        ></textarea>

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
