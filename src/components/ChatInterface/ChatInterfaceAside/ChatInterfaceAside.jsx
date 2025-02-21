import AsideNavigationIcon from "./AsideNavigationIcon";
import { icons } from "../../../constants";
import { labels } from "../../../constants";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";

export default function ChatInterfaceAside() {
  const { setNavigationContentIndex } = useContext(NavigationContentContext);
  const { interfaceThemeColor } = useContext(ChatInterfaceContext);

  function handleIconClick(index) {
    setNavigationContentIndex(index);
  }
  return (
    <nav
      style={{
        boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0 10px ${interfaceThemeColor}, 0px 0 10px ${interfaceThemeColor}, 0px 0 10px ${interfaceThemeColor}`,
        backgroundColor: `${interfaceThemeColor}`,
      }}
      className={`h-full px-2 py-6 w-[80px] aside  flex flex-col gap-6 duration-300 fixed z-90 mt-[60px]`}
    >
      {icons.map((icon, index) => (
        <AsideNavigationIcon
          key={index}
          icon={icon}
          index={index}
          label={labels[index]}
          onClick={() => {
            handleIconClick(index);
          }}
        />
      ))}
    </nav>
  );
}
