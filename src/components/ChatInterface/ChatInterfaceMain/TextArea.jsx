import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";

export default function TextArea({
  setSelectedLanguage,
  handleSubmit,
  setInputError,
  setTyping,
  setInputedText,
  inputedText,
  setNavigationContentIndex,
}) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  return (
    <textarea
      className="border-4  w-full min-h-[100px] rounded-2xl backdrop-blur-[5px] bg-[#000000cc] focus:border-6 focus:outline-0 px-4 py-2 pr-[70px] text-white font-medium font-itim text-lg resize-none tracking-wider"
      aria-label="Enter your text"
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
      onFocus={() => {
        setNavigationContentIndex(0);
      }}
    ></textarea>
  );
}

TextArea.propTypes = {
  setSelectedLanguage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setInputError: PropTypes.func.isRequired,
  setTyping: PropTypes.func.isRequired,
  setInputedText: PropTypes.func.isRequired,
  inputedText: PropTypes.string.isRequired,
  setNavigationContentIndex: PropTypes.func.isRequired,
};
