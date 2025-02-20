import { avatars, contentHeadingStyles } from "../../../../constants";
import { contentContainerStyles } from "../../../../constants";
import { useContext } from "react";
import { ChatInterfaceContext } from "../../../../contexts/UseChatInterfaceContext";

const style =
  "w-[80px] h-[80px] rounded-full shadow-xl border-[3px] border-brown-thick hover:border-[3px] hover:border-red-thick  hover:shadow-2xl focus:border-[3px] focus:border-red-thick focus:shadow-2xl focus:outline-0";

export default function ProfileContent() {
  const { setUserAvatar } = useContext(ChatInterfaceContext);
  function handleAvatarClick(avatar) {
    setUserAvatar(avatar);
  }
  return (
    <div
      className={`${contentContainerStyles} scroll-style`}
      style={{
        scrollbarColor: "var(--color-pink-thick) var(--color-pink-light)",
      }}
    >
      <h2 className={contentHeadingStyles}>
        Select the Avatar that best captures your style or expression. 😉
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {avatars.map((avatar, index) => {
          return (
            <button
              key={index}
              className={style}
              onClick={() => {
                handleAvatarClick(avatar);
              }}
            >
              <img src={avatar} alt="avatar" className="object-contain" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
