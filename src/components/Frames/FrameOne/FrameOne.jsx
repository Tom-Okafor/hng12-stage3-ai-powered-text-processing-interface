import PropTypes from "prop-types";

export default function FrameOne({ currentFrame, isCurrentFrameChanging }) {
  return (
    <section
      className={`min-h-dvh flex ${
        currentFrame === 1 &&
        isCurrentFrameChanging === true &&
        "animate-disappear"
      } flex-col gap-8 px-8 py-8 items-center justify-center`}
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
      <button className="text-xl bg-bluish hover:bg-bluish-dark duration-300 text-white px-4 py-3 rounded-full leading-[100%] font-yatra tracking-[2px] shadow-[0px_3px_10px_#486498]">
        Try LinguaSwift Now!
      </button>
    </section>
  );
}

FrameOne.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  isCurrentFrameChanging: PropTypes.bool.isRequired,
};
