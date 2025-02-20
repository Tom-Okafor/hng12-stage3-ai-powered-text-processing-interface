import Logo from "../Logo";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../contexts/UseChatInterfaceContext";

export default function ChatInterfaceHeader() {
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);
  return (
    <header
      style={{
        boxShadow: '0px 5px 8px -5px #777',
      }}
      className={`px-[70px] py-1 h-[60px] bg-${interfaceThemeColor} duration-300`}
    >
      <Logo height={30} fontSize="lg" />
    </header>
  );
}
