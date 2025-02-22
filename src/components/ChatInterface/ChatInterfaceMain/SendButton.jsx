import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";

export default function SendButton({ setSelectedLanguage, handleSubmit }) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  return (
    <button
      className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
      onClick={() => {
        setSelectedLanguage("en");
        handleSubmit();
      }}
      aria-label="submit text"
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
  );
}

SendButton.propTypes = {
  setSelectedLanguage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
