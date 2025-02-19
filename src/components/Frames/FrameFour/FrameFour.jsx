import PropTypes from "prop-types";

const spanStyles =
  "text-[#e93d4f] font-black tracking-widest font-yatra text-xl md:text-2xl";
export default function FrameFour({ currentFrame, isCurrentFrameChanging }) {
  return (
    <section
      className={`min-h-dvh flex ${
        currentFrame === 4 &&
        isCurrentFrameChanging === true &&
        "animate-disappear"
      } flex-col gap-8 px-8 py-8 items-center justify-center`}
    >
      <img
        src="b-frame.png"
        alt="person with a robot"
        className="sm:object-cover sm:h-[60vh] h-auto object-contain animate-appear"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[30ch] text-bluish-dark antialiased animate-heading">
        Limitless Potential. Unrestricted Communication.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[40ch] font-poiret font-black tracking-wider leading-[150%] animate-text opacity-0">
        <span className={spanStyles}>LinguaSwift</span> will save you years and
        decades of endless learning. Upgrade your productivity. Boost your
        linguistic effectiveness. Operate globally from a place of rest.
        Language is everything and Language is fun with{" "}
        <span className={spanStyles}>LinguaSwift</span>
      </p>
      <button className="text-xl bg-red-500 hover:bg-red-700 duration-300 text-white px-4 py-3 rounded-full leading-[100%] font-yatra tracking-[2px] shadow-[0px_3px_10px_#e93d4f]">
        Try LinguaSwift Now!
      </button>
    </section>
  );
}

FrameFour.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  isCurrentFrameChanging: PropTypes.bool.isRequired,
};
