import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";
export default function ActionButton({
  setLoading,
  processFunc,
  interaction,
  width,
  text,
}) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  return (
    <button
      className="border-2 rounded-2xl bg-[#000000cc] px-4 py-2 text-white font-bold font-itim text-lg space-y-1 tracking-widest hover:border-4"
      style={{ borderColor: interfaceThemeColor, width: width }}
      onClick={() => {
        setLoading(true);
        processFunc(interaction.message);
      }}
    >
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  setLoading: PropTypes.func.isRequired,
  processFunc: PropTypes.func.isRequired,
  interaction: PropTypes.object.isRequired,
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
};
