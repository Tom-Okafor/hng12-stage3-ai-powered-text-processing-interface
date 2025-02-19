import FrameOne from "./FrameOne/FrameOne";
import FrameTwo from "./FrameTwo/FrameTwo";
import FrameThree from "./FrameThree/FrameThree";
import FrameFour from "./FrameFour/FrameFour";
import { useState } from "react";

export default function Frames() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isCurrentFrameChanging, setCurrentFrameIsChanging] = useState(false);

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
    <div className="border-2 min-h-dvh">
      <button
        className="border-2 border-brown-thick"
        onClick={handlePrevButtonClick}
      >
        previous
      </button>
      <button
        className="border-2 border-brown-thick"
        onClick={handleNextButtonClick}
      >
        next
      </button>
      <FrameOne
        currentFrame={currentFrame}
        isCurrentFrameChanging={isCurrentFrameChanging}
      />
      <FrameTwo
        currentFrame={currentFrame}
        isCurrentFrameChanging={isCurrentFrameChanging}
      />
      <FrameThree
        currentFrame={currentFrame}
        isCurrentFrameChanging={isCurrentFrameChanging}
      />
      <FrameFour
        currentFrame={currentFrame}
        isCurrentFrameChanging={isCurrentFrameChanging}
      />
    </div>
  );
}
