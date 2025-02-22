import { useContext, useState } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";
import Image from "./Image";
import { returnSpeechLang } from "../../../utils/returnSpeechLang";

export default function BotMessageBlock({ interaction }) {
  const { interfaceThemeColor, userAvatar } = useContext(ChatInterfaceContext);
  const [copyTextIcon, setCopyTextIcon] = useState("copy.svg");
  const [copyAlert, setCopyAlert] = useState(false);
  async function handleCopy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyTextIcon("copied.svg");
      setCopyAlert(true);
      setTimeout(() => {
        setCopyAlert(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying text:", error);
    }
  }

  function handleSpeech() {
    console.log(interaction);
    const speech = new SpeechSynthesisUtterance();
    speech.text = interaction.message;
    speech.lang = returnSpeechLang(interaction.detectedCode);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = 1; 
    speechSynthesis.speak(speech);
    const voices = speechSynthesis.getVoices();
    speech.voice =
      voices.find(
        (voice) => voice.lang === returnSpeechLang(interaction.detectedCode)
      ) || voices.find((voice) => voice.lang === "en-UK");
    console.log(speech.voice, speech.lang);
    speechSynthesis.speak(speech);
  }
  return (
    <div
      className="flex flex-col z-50 gap-1.5"
      style={{
        marginRight: "auto",
      }}
    
    >
      <div
        className="flex gap-3 items-start"
        style={{
          flexDirection: interaction.type === "user" ? "row" : "row-reverse",
        }}
      >
        <div
          className={`max-w-[300px] md:max-w-[400px] min-w-[200px] rounded-2xl z-30 p-4 md:px-8 shadow-[0px_0px_5px_3px_#777] space-y-2 border-2 md:border-0 border-red-faint`}
          style={{
            backgroundColor: interfaceThemeColor,
          }}
        >
          <p className="text-lg text-black font-itim font-semi-bold" id="message">
            {interaction.message}
          </p>
        </div>
        <Image interaction={interaction} userAvatar={userAvatar} />
      </div>
      <div className="flex p-2 gap-4 bg-[#ffffff55] backdrop-blur-[2px] w-fit rounded-xl *:cursor-pointer">
        <button
          onClick={() => {
            handleCopy(interaction.message);
          }}
        >
          <img src={copyTextIcon} alt="copy text" className="h-[40px]" />
        </button>
        <button onClick={handleSpeech}>
          <img src="speak.svg" alt="read aloud" className="h-[40px]" />
        </button>
        {!!copyAlert && (
          <p
            className="bg-[#00000077] text-white p-2 rounded-xl font-yatra text-lg"
            aria-live="assertive"
            role="alert"
          >
            Text copied!
          </p>
        )}
      </div>
    </div>
  );
}

BotMessageBlock.propTypes = {
  interaction: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["user", "bot"]).isRequired,
    detectedCode: PropTypes.string,
  }),
};
