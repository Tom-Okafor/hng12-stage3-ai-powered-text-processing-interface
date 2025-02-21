import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";

export default function Image({ interaction, userAvatar }) {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  <img
    src={interaction.type === "user" ? userAvatar : "linguaSwift-logo.png"}
    alt="profile"
    aria-hidden="true"
    className="w-[50px] object-contain z-50 rounded-full backdrop-blur-[3px]"
    style={{ border: `3px solid ${interfaceThemeColor}` }}
  />;
}

Image.propTypes = {
  interaction: PropTypes.object.isRequired,
  userAvatar: PropTypes.string.isRequired,
};
