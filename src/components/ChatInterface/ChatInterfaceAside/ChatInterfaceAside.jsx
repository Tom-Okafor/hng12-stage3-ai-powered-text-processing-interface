import AsideNavigationIcon from "./AsideNavigationIcon";
import { icons } from "../../../constants";
import { labels } from "../../../constants";

function handleIconClick(index) {
  console.log(index);
}
export default function ChatInterfaceAside() {
  return (
    <nav className="h-full bg-red-light px-2 py-6 w-[80px] shadow-[5px_0px_8px_-5px_#fe79ea,8px_0px_8px_-8px_#777] relative aside before:content-[''] before:absolute before:top-0 before:right-[-30px] before:bg-transparent before:h-[30px] before:w-[30px] before:rounded-full before:shadow-[-10px_-10px_0px_#ffc8db] flex flex-col gap-6">
      {icons.map((icon, index) => (
        <AsideNavigationIcon
          key={index}
          icon={icon}
          label={labels[index]}
          onClick={() => {
            handleIconClick(index);
          }}
        />
      ))}
    </nav>
  );
}
