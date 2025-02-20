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
        boxShadow:
          "8px 0px 8px -8px #777",
      }}
      className={`h-full bg-${interfaceThemeColor} px-2 py-6 w-[80px] relative aside  flex flex-col gap-6 duration-300`}
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
