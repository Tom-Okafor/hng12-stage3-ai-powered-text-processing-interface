import { themeColours } from "../../../../constants";

const style = "w-[85px] h-[85px] rounded-lg shadow-xl";

export default function ThemeContent() {
  function handleThemeButtonClick(color) {
    console.log(color);
  }
  return (
    <div className="w-[80vw] md:w-[400px] flex flex-col justify-start items-center gap-8 py-6 px-4 mt-2 border-2 border-gray-light border-t-0 bg-[#fff]">
      <h2 className="text-lg font-bold font-autour text-center capitalize tracking-wider leading-[150%] text-gray-dark">Change the colors to customize your interface</h2>
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
