import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { chatBackgrounds } from "../../../constants";

export default function ChatInterfaceMain() {
  const { interfaceBackground } = useContext(ChatInterfaceContext);
  const { setNavigationContentIndex } = useContext(NavigationContentContext);
  return (
    <section className="relative flex-1 h-full">
      <div
        style={{
          background: `linear-gradient(60deg,#00000053,transparent,#00000083),url(${chatBackgrounds[interfaceBackground]})`,
        }}
        className="background"
        onClick={() => {
          setNavigationContentIndex(0);
        }}
      ></div>
    </section>
  );
}
