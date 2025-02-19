import FrameOne from "./FrameOne/FrameOne";
import FrameTwo from "./FrameTwo/FrameTwo";
import FrameThree from "./FrameThree/FrameThree";
import FrameFour from "./FrameFour/FrameFour";
import FrameNavigationIcon from "./Shared/FrameNavigationIcon";
import { useState } from "react";

export default function Frames() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isCurrentFrameChanging, setCurrentFrameIsChanging] = useState(false);
  const frames = [
    <FrameOne
      key={1}
      currentFrame={currentFrame}
      isCurrentFrameChanging={isCurrentFrameChanging}
    />,
    <FrameTwo
      key={2}
      currentFrame={currentFrame}
      isCurrentFrameChanging={isCurrentFrameChanging}
    />,
    <FrameThree
      key={3}
      currentFrame={currentFrame}
      isCurrentFrameChanging={isCurrentFrameChanging}
    />,
    <FrameFour
      key={4}
      currentFrame={currentFrame}
      isCurrentFrameChanging={isCurrentFrameChanging}
    />,
  ];

  function handleNextButtonClick() {
    setCurrentFrameIsChanging(true);
    setTimeout(() => {
      setCurrentFrame((prev) => {
        if (prev === 4) {
          return 1;
        }
        return prev + 1;
      });
      setCurrentFrameIsChanging(false);
    }, 1000);
  }

  function handlePrevButtonClick() {
    setCurrentFrameIsChanging(true);
    setTimeout(() => {
      setCurrentFrame((prev) => {
        if (prev === 1) {
          return 4;
        }
        return prev - 1;
      });
      setCurrentFrameIsChanging(false);
    }, 1000);
  }

  return (
    <div className="">
      <button
        className="fixed top-[50%] [transform:translateY(-50%)] left-[6%] scale-x-[-1]"
        onClick={handlePrevButtonClick}
      >
        <FrameNavigationIcon />
      </button>
      <button
        className="fixed top-[50%] [transform:translateY(-50%)] right-[6%]"
        onClick={handleNextButtonClick}
      >
        <FrameNavigationIcon />
      </button>
      {frames[currentFrame - 1]}
    </div>
  );
}
