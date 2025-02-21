import { useContext } from "react";
import { ChatInterfaceContext } from "../../../contexts/UseChatInterfaceContext";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { chatBackgrounds } from "../../../constants";

export default function ChatInterfaceMain() {
  const { interfaceBackground, interfaceThemeColor } =
    useContext(ChatInterfaceContext);
  const { setNavigationContentIndex } = useContext(NavigationContentContext);
  return (
    <section className="relative flex-1 min-h-full flex flex-col items-center pb-4">
      <div
        style={{
          background: `linear-gradient(60deg,#00000053,transparent,#00000083),url(${chatBackgrounds[interfaceBackground]})`,
        }}
        className="background"
        onClick={() => {
          setNavigationContentIndex(0);
        }}
      ></div>
      <div className="mt-auto w-[70%] flex justify-center relative">
        <textarea
          className="border-4  w-full min-h-[100px] rounded-2xl backdrop-blur-[5px] bg-[#00000033] focus:border-6 focus:outline-0 px-4 py-2 pr-[70px] text-black font-semibold font-itim text-lg resize-none tracking-wider"
          style={{ borderColor: interfaceThemeColor }}
        ></textarea>

        <button className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer">
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.40002 20.29 4.28002 14.54L5.15002 12.81C5.37002 12.37 5.37002 11.64 5.15002 11.2L4.28002 9.46001C1.40002 3.71001 3.76002 1.35001 9.51002 4.23001Z"
              stroke={`${interfaceThemeColor}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.44 12H10.84"
              stroke={`${interfaceThemeColor}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
