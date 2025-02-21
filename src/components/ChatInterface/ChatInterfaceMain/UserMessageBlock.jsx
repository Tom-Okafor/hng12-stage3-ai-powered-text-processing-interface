import Image from "./Image";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";
import ActionButton from "./ActionButton";
import Select from "./Select";

export default function UserMessageBlock(props) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  const {
    interaction,
    selectedLanguage,
    setSelectedLanguage,
    handleSummarize,
    handleTranslate,
    setLoading,
  } = props;

  return (
    <div
      className="flex flex-col z-50 gap-1.5"
      style={{
        marginLeft: "auto",
      }}
    >
      <div className="flex gap-3 items-start">
        <div
          className={`max-w-[400px] rounded-2xl z-30 p-4 px-8 shadow-[0px_0px_5px_3px_#777] space-y-2`}
          style={{
            backgroundColor: interfaceThemeColor,
          }}
        >
          <p className="text-lg text-black font-itim font-semi-bold">
            {interaction.message}
          </p>
          <>
            <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim  tracking-wider">
              {!!interaction.detectedLanguage &&
                `Language: ${interaction.detectedLanguage}`}
            </p>
            <p className="text-lg py-1 px-2 rounded-2xl w-fit text-white bg-[#00000044] font-itim tracking-wider">
              {!!interaction.certainty && `Certainty: ${interaction.certainty}`}
            </p>
          </>
        </div>
        <Image interaction={interaction} />
      </div>

      <div className="space-y-2">
        <div
          className="border-4 w-[85%] rounded-2xl bg-[#000000cc] px-4 py-2 pb-4 text-white font-medium font-itim text-lg space-y-2"
          style={{ borderColor: interfaceThemeColor }}
        >
          <Select
            interaction={interaction}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
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
    </div>
  );
}

UserMessageBlock.propTypes = {
  interaction: PropTypes.shape({
    message: PropTypes.string.isRequired,
    detectedLanguage: PropTypes.string.isRequired,
    certainty: PropTypes.number.isRequired,
    detectedCode: PropTypes.string.isRequired,
  }).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
  handleSummarize: PropTypes.func.isRequired,
  handleTranslate: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
