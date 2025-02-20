import { themeColours } from "../../../../constants";
import { contentContainerStyles } from "../../../../constants";
import { contentHeadingStyles } from "../../../../constants";

const style = "w-[85px] h-[85px] rounded-lg shadow-xl";

export default function ThemeContent() {
  function handleThemeButtonClick(color) {
    console.log(color);
  }
  return (
    <div className={contentContainerStyles}>
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
