import { themeColours } from "../../../../constants";
import { contentContainerStyles } from "../../../../constants";
import { contentHeadingStyles } from "../../../../constants";

const style =
  "w-[85px] h-[85px] rounded-lg shadow-xl hover:border-[3px] hover:border-red-thick hover:shadow-2xl focus:border-[3px] focus:border-red-thick  focus:shadow-2xl focus:outline-0`";

export default function ThemeContent() {
  function handleThemeButtonClick(color) {
    console.log(color);
  }
  return (
    <div
      className={`${contentContainerStyles} scroll-style`}
      style={{
        scrollbarColor: "var(--color-pink-thick) var(--color-pink-light)",
      }}
    >
      <h2 className={contentHeadingStyles}>
        Change the colors to customize your interface
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {themeColours.map((color, index) => {
          return (
            <button
              key={index}
              className={`${style} ${color}`}
              onClick={() => {
                handleThemeButtonClick(color);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
