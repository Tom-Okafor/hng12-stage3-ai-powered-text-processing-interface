import { themeColours } from "../../../../constants";

const style = "w-[50px] h-[50px] rounded-lg shadow-2xl";

export default function ThemeContent() {
  return (
    <div className="w-[80vw] md:w-[400px] flex flex-col justify-start gap-8 py-6 px-4 border-2 border-gray-light border-t-0">
      <h2>Change the colors to customize your interface</h2>
      <div>
        {themeColours.map((color, index) => {
          return (
            <button
              key={index}
              className={`${style} ${color}`}
              onClick={() => {
                handleThemeButtonClick(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
