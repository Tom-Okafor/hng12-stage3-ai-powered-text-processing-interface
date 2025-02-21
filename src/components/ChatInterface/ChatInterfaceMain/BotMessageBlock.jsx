import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import PropTypes from "prop-types";
import Image from "./Image";

export default function BotMessageBlock({ interaction, }) {
  const { interfaceThemeColor, userAvatar } = useContext(ChatInterfaceContext);
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
          <p className="text-lg text-black font-itim font-semi-bold">
            {interaction.message}
          </p>
        </div>
        <Image interaction={interaction} userAvatar={userAvatar} />
      </div>
    </div>
  );
}

BotMessageBlock.propTypes = {
  interaction: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["user", "bot"]).isRequired,
  }),
};
