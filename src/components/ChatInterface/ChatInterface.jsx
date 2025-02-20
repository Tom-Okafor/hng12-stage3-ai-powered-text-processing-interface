import ChatInterfaceHeader from "./ChatInterfaceHeader";
import ChatInterfaceAside from "./ChatInterfaceAside/ChatInterfaceAside";
import ChatInterfaceMain from "./ChatInterfaceMain/ChatInterfaceMain";
import { useState } from "react";
import { NavigationContentContext } from "../../contexts/UseNavigationContentContext";

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
  return (
    <section className="flex flex-col h-dvh">
      <ChatInterfaceHeader />

      <div className="flex-1 flex">
        <NavigationContentContext.Provider value={{setNavigationContentIndex, navigationContentIndex}}>
          <ChatInterfaceAside />
        </NavigationContentContext.Provider>
        {!!navigationContentIndex && content[navigationContentIndex - 1]}
        <ChatInterfaceMain />
      </div>
    </section>
  );
}
