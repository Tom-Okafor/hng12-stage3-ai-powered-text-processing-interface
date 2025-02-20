import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CTA({ background, hoverBackground, shadow }) {
  const navigate = useNavigate();
  return (
    <button
      className={`text-lg md:text-xl ${background} hover:${hoverBackground} duration-300 text-white px-4 py-3 rounded-full leading-[100%] font-yatra tracking-[2px] shadow-[0px_3px_10px_${shadow}]`}
      onClick={() => {
        navigate("/chat");
      }}
    >
      Try LinguaSwift Now!
    </button>
  );
}

CTA.propTypes = {
  background: PropTypes.string.isRequired,
  hoverBackground: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
};
