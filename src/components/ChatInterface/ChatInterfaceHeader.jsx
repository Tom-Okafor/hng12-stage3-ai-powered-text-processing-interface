import Logo from "../Logo";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../contexts/UseNavigationContentContext";

export default function ChatInterfaceHeader() {
  const { interfaceThemeColor, userAvatar, setMenuVisibility } =
    useContext(ChatInterfaceContext);
  const { setNavigationContentIndex } = useContext(NavigationContentContext);

  return (
    <header
      style={{
        backgroundColor: `${interfaceThemeColor}`,
        boxShadow: `0px 5px 4px rgba(0, 0, 0, 0.2), 0px 0px 10px ${interfaceThemeColor}, 0px 2px 10px ${interfaceThemeColor},`,
      }}
      className={`px-2 md:px-[70px] py-1 h-[60px] duration-300 flex justify-between items-center fixed w-full z-80`}
    >
      <Logo height={30} fontSize="lg" />
      <img
        src={userAvatar}
        alt="profile"
        aria-hidden="true"
        className="h-[50px] w-[50px] border-2 rounded-full hidden md:block"
      />
      <button className="md:hidden group focus:border-0 focus:outline-0">
        <img
          src={userAvatar}
          alt="profile"
          aria-hidden="true"
          className="h-[50px] w-[50px] border-2 rounded-full group-focus:border-3 group-hover:border-3"
          onClick={() => {
            setMenuVisibility((prevState) => !prevState);
            setNavigationContentIndex(0);
          }}
        />
      </button>
    </header>
  );
}
