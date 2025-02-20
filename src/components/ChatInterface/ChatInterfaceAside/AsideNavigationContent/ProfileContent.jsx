import { avatars, contentHeadingStyles } from "../../../../constants";
import { contentContainerStyles } from "../../../../constants";

const style = "w-[80px] h-[80px] rounded-full shadow-xl border-2 border-teal";

export default function ProfileContent() {
  return (
    <div className={contentContainerStyles}>
      <h2 className={contentHeadingStyles}>
        Select the Avatar that best captures your style or expression. 😉
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {avatars.map((avatar, index) => {
          return (
            <button key={index} className={style}>
              <img src={avatar} alt="avatar" className="object-contain" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
