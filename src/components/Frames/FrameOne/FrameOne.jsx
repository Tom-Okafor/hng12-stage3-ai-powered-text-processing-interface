import PropTypes from "prop-types";
import CTA from "../Shared/CTA";

export default function FrameOne({ currentFrame, isCurrentFrameChanging }) {
  return (
    <section
      className={`min-h-dvh flex ${
        currentFrame === 1 &&
        isCurrentFrameChanging === true &&
        "animate-disappear"
      } flex-col gap-8 px-8 pb-8 items-center justify-center`}
    >
      <img
        src="c-frame.png"
        alt="person with a robot"
        className="sm:object-cover sm:h-[60vh] h-auto object-contain animate-appear"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[30ch] text-bluish-dark antialiased animate-heading">
        Understand Any Text, Any Language – Instantly!
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[40ch] font-poiret font-black tracking-wider animate-text opacity-0 leading-[250%]">
        <span className="text-pink-thick font-black tracking-widest font-yatra text-xl md:text-2xl">
          LinguaSwift
        </span>{" "}
        harnesses the power of AI to translate, summarize, and detect languages
        effortlessly. Whether you&rsquo;re decoding foreign text, simplifying
        complex information, or communicating globally, we make it effortless.
        Fast. Accurate. Seamless. Say goodbye to language barriers and
        information overload!
      </p>
      <CTA
        background="bg-bluish"
        hoverBackground="bg-bluish-dark"
        shadow="#486498"
      />
    </section>
  );
}

FrameOne.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  isCurrentFrameChanging: PropTypes.bool.isRequired,
};
