export default function FrameThree() {
  return (
    <section className="min-h-dvh flex flex-col gap-8 px-8 py-8 items-center justify-center">
      <img
        src="e-frame.png"
        alt="person with a robot"
        className="object-cover h-[55vh]"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[30ch] text-[#5c6ed1] antialiased">
        AI That Speaks Every Language.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[50ch] font-poiret font-black tracking-wider leading-[150%]">
        Language should never be a barrier. With{" "}
        <span className="text-[#ff8d78] font-black tracking-widest font-yatra text-xl md:text-2xl">
          LinguaSwift
        </span>
        , you can instantly translate, summarize, and detect languages with
        AI-powered precision. Whether you&rsquo;re reading foreign content,
        communicating across cultures, or simplifying complex text, our
        intelligent tool ensures seamless understanding—anytime, anywhere. 🌍✨
      </p>
    </section>
  );
}
