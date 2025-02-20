import { chatBackgrounds } from "../../../../constants";

console.log(chatBackgrounds.length);
export default function BackgroundContent() {
  return (
    <div>
      <h2>Select a background image to stylize your interface.</h2>
      <div className="">
        {chatBackgrounds.map((background, index) => {
          return (
            <button key={index} className="h-[300px]">
              <img src={background} alt="background" className="h-full object-contain" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
