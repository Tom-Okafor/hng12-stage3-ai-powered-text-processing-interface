import { avatars } from "../../../../constants";

const style = "w-[50px] h-[50px] rounded-full shadow-2xl border-2";

export default function ProfileContent() {
  return (
    <div>
      <h2>Select the Avatar that best captures your style or expression. 😉</h2>
      <div>
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
