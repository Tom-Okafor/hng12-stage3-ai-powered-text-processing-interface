import ChatInterfaceHeader from "./ChatInterfaceHeader";
import ChatInterfaceAside from "./ChatInterfaceAside/ChatInterfaceAside";
import ChatInterfaceMain from "./ChatInterfaceMain/ChatInterfaceMain";
import { useState } from "react";
import { NavigationContentContext } from "../../contexts/UseNavigationContentContext";
import { ChatInterfaceContext } from "../../contexts/UseChatInterfaceContext";
import ThemeContent from "./ChatInterfaceAside/AsideNavigationContent/ThemeContent";
import ProfileContent from "./ChatInterfaceAside/AsideNavigationContent/ProfileContent";
import BackgroundContent from "./ChatInterfaceAside/AsideNavigationContent/BackgroundContent";

const content = [
  <ProfileContent key={1} />,
  <ThemeContent key={2} />,
  <BackgroundContent key={3} />,
];
export default function ChatInterface() {
  const [navigationContentIndex, setNavigationContentIndex] = useState(0);
  const [interfaceThemeColor, setInterfaceThemeColor] = useState("#ffc8db");
  const [interfaceBackground, setInterfaceBackground] = useState(0);
  const [userAvatar, setUserAvatar] = useState("profile.svg");
  const [chatInteractions, setChatInteractions] = useState([]);
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <section className="flex flex-col h-dvh">
      <ChatInterfaceContext.Provider
        value={{
          interfaceThemeColor,
          setInterfaceThemeColor,
          interfaceBackground,
          setInterfaceBackground,
          userAvatar,
          setUserAvatar,
          chatInteractions,
          setChatInteractions,
          menuVisibility,
          setMenuVisibility,
        }}
      >
        <NavigationContentContext.Provider
          value={{ setNavigationContentIndex, navigationContentIndex }}
        >
          <ChatInterfaceHeader />

          <div className="flex-1 flex" aria-live="assertive">
            <ChatInterfaceAside />
            {!!navigationContentIndex && (
              <div className="z-100 bg-white ml-[80px] mt-[60px] fixed">
                {content[navigationContentIndex - 1]}
              </div>
            )}
            <ChatInterfaceMain />
          </div>
        </NavigationContentContext.Provider>
      </ChatInterfaceContext.Provider>
    </section>
  );
}
