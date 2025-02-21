import Logo from "../Logo";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../contexts/UseChatInterfaceContext";

export default function ChatInterfaceHeader() {
  const { interfaceThemeColor, userAvatar } = useContext(ChatInterfaceContext);
  return (
    <header
      style={{
        backgroundColor: `${interfaceThemeColor}`,
        boxShadow: `0px 5px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px ${interfaceThemeColor}, 0px 2px 10px ${interfaceThemeColor}, 0px 2px 10px ${interfaceThemeColor}`,
      }}
      className={`px-[70px] py-1 h-[60px] duration-300 flex justify-between items-center fixed w-full z-80`}
    >
      <Logo height={30} fontSize="lg" />
      <img src={userAvatar} alt="profile" aria-hidden='true' className="h-[50px] w-[50px] border-2 rounded-full" />
    </header>
  );
}
