import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";

export default function LoadSignal({
  flexDirection,
  marginLeft,
  marginRight,
  padding,
  source,
}) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  return (
    <div
      className="mt-auto mb-[120px] z-10 flex gap-4"
      style={{
        flexDirection: flexDirection,
        marginLeft: marginLeft,
        marginRight: marginRight,
        paddingLeft: padding,
      }}
    >
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
        src={source}
        alt="profile"
        aria-hidden="true"
        className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px] "
        style={{ border: `3px solid ${interfaceThemeColor}` }}
      />
    </div>
  );
}

LoadSignal.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "row-reverse"]),
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  padding: PropTypes.string,
  source: PropTypes.string,
};

LoadSignal.defaultProps = {
  flexDirection: "row",
  source: "linguaSwift-logo.png",
};
