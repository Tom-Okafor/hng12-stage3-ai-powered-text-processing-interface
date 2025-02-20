import PropTypes from "prop-types";
import CTA from "../Shared/CTA";

export default function FrameThree({ currentFrame, isCurrentFrameChanging }) {
  return (
    <section
      className={`min-h-dvh flex ${
        currentFrame === 3 &&
        isCurrentFrameChanging === true &&
        "animate-disappear"
      } flex-col gap-8 px-8 pb-8 items-center justify-center`}
    >
      <img
        src="e-frame.png"
        alt="person with a robot"
        className="sm:object-cover sm:h-[60vh] h-auto object-contain animate-appear"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[25ch] text-[#ec6c5c] antialiased animate-heading">
        AI That Speaks Every Language.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[40ch] font-poiret font-black tracking-wider leading-[150%] animate-text opacity-0">
        Language should never be a barrier. With{" "}
        <span className="text-[#5c6ed1] font-black tracking-widest font-yatra text-xl md:text-2xl">
          LinguaSwift
        </span>
        , you can instantly translate, summarize, and detect languages with
        AI-powered precision. Whether you&rsquo;re reading foreign content,
        communicating across cultures, or simplifying complex text, our
        intelligent tool ensures seamless understanding—anytime, anywhere. 🌍✨
      </p>
      <CTA extraClass="btnBlue" shadow="#486498" />
    </section>
  );
}

FrameThree.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  isCurrentFrameChanging: PropTypes.bool.isRequired,
};
