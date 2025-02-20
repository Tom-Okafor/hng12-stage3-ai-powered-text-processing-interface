import { chatBackgrounds } from "../../../../constants";
import { contentContainerStyles } from "../../../../constants";
import { contentHeadingStyles } from "../../../../constants";

const style =
  "w-[150px] h-[250px] rounded-lg shadow-xl hover:border-[3px] hover:border-red-thick hover:shadow-2xl focus:border-[3px] focus:border-red-thick  focus:shadow-2xl focus:outline-0";
export default function BackgroundContent() {
  return (
    <div
      className={`${contentContainerStyles} scroll-style`}
      style={{
        scrollbarColor: "var(--color-pink-thick) var(--color-pink-light)",
      }}
    >
      <h2 className={contentHeadingStyles}>
        Select a background image to stylize your interface.
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {chatBackgrounds.map((background, index) => {
          return (
            <button key={index} className={`${style}`}>
              <img
                src={background}
                alt="background"
                className="h-full object-cover rounded-lg"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
