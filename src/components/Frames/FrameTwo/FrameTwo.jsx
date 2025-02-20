import PropTypes from "prop-types";
import CTA from "../Shared/CTA";

export default function FrameTwo({ currentFrame, isCurrentFrameChanging }) {
  return (
    <section
      className={`min-h-dvh flex ${
        currentFrame === 2 &&
        isCurrentFrameChanging === true &&
        "animate-disappear"
      } flex-col gap-8 px-8 pb-8 items-center justify-center`}
    >
      <img
        src="d-frame.png"
        alt="person with a robot"
        className="sm:object-cover sm:h-[60vh] h-auto object-contain animate-appear"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[30ch] text-[#e93d4f] antialiased animate-heading">
        Breaking Language Barriers, One Word at a Time.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[40ch] font-poiret font-black tracking-wider leading-[150%] animate-text opacity-0">
        <span className="text-teal font-black tracking-widest font-yatra text-xl md:text-2xl">
          LinguaSwift
        </span>{" "}
        helps you seamlessly translate, summarize, and detect languages. Whether
        you&apos;re reading foreign content, communicating across cultures, or
        simplifying complex text, our AI-powered tool ensures clarity and
        accuracy—effortlessly. Say goodbye to confusion and hello to seamless
        communication! 🚀
      </p>
      
       <CTA background='bg-red-500' hoverBackground='bg-red-700' shadow='#e93d4f'/>    
    </section>
  );
}

FrameTwo.propTypes = {
  currentFrame: PropTypes.number.isRequired,
  isCurrentFrameChanging: PropTypes.bool.isRequired,
};
