import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CTA({ extraClass, shadow }) {
  const navigate = useNavigate();
  return (
    <button
      className={`text-lg md:text-xl duration-300 text-white px-4 py-3 rounded-full leading-[100%] font-yatra tracking-[2px] drop-shadow-[5px_10px_10px_#00000077] mb-4 ${extraClass}`}
      style={{
        boxShadow: `0px 3px 10px ${shadow}`,
      }}
      onClick={() => {
        navigate("/chat");
      }}
    >
      Try LinguaSwift Now!
    </button>
  );
}

CTA.propTypes = {
  extraClass: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
};
