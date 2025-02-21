import { useContext, useState, useEffect } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { chatBackgrounds } from "../../../constants";
import { handleLanguageDetector } from "../../../utils/handleLanguageDetector";
import { handleTranslator } from "../../../utils/handleTranslator";

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
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  async function handleSubmit() {
    if (inputedText.trim() === "") {
      setInputError("Please enter a message");
      return;
    }
    const detectedLanguage = await handleLanguageDetector(inputedText);
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

  async function handleTranslate() {
    const translatedText = await handleTranslator(
      inputedText,
      selectedLanguage
    );
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
  }

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [chatInteractions, isTyping]);

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
      <div className="flex flex-col gap-8 w-full mt-20 mb-[150px]">
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
              <div className="flex gap-3 items-center">
                <div
                  className={`max-w-[400px] rounded-2xl z-30 p-4 px-8 shadow-[0px_0px_5px_3px_#777] space-y-2`}
                  style={{
                    backgroundColor: interfaceThemeColor,
                  }}
                >
                  <p className="text-lg text-black font-itim font-semi-bold">
                    {interaction.message}
                  </p>
                  <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim  tracking-wider">
                    {" "}
                    Language: {interaction.detectedLanguage}
                  </p>
                  <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim tracking-wider">
                    {" "}
                    Certainty: {interaction.certainty}
                  </p>
                </div>
                <img
                  src={userAvatar}
                  alt="profile"
                  aria-hidden="true"
                  className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px]"
                  style={{ border: `3px solid ${interfaceThemeColor}` }}
                />
              </div>
              <div
                className="border-4 w-[85%] rounded-2xl bg-[#000000cc] px-4 py-2 text-white font-medium font-itim text-lg space-y-1"
                style={{ borderColor: interfaceThemeColor }}
              >
                <label htmlFor="language" className="flex gap-2">
                  Translate To:
                  <select
                    id="language"
                    className="bg-[#000000cc]"
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
                <button
                  className="border-4 w-full rounded-2xl text-white font-medium font-itim text-lg cursor-pointer"
                  style={{ borderColor: interfaceThemeColor }}
                  onClick={() => {
                    handleTranslate();
                  }}
                >
                  translate
                </button>
              </div>
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

        <button
          className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={handleSubmit}
        >
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.40002 20.29 4.28002 14.54L5.15002 12.81C5.37002 12.37 5.37002 11.64 5.15002 11.2L4.28002 9.46001C1.40002 3.71001 3.76002 1.35001 9.51002 4.23001Z"
              stroke={`${interfaceThemeColor}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.44 12H10.84"
              stroke={`${interfaceThemeColor}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
