export default function FrameTwo() {
  return (
    <section className="min-h-dvh flex flex-col gap-8 px-8 py-8 items-center justify-center">
      <img
        src="d-frame.png"
        alt="person with a robot"
        className="object-cover h-[55vh]"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[30ch] text-bluish-dark antialiased">
        Breaking Language Barriers, One Word at a Time.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-[50ch] font-poiret font-black tracking-wider leading-[150%]">
        <span className="text-pink-thick font-black tracking-widest font-yatra text-xl md:text-2xl">
          LinguaSwift
        </span> helps you seamlessly translate, summarize, and detect languages. Whether
        you&apos;re reading foreign content, communicating across cultures, or
        simplifying complex text, our AI-powered tool ensures clarity and
        accuracy—effortlessly. Say goodbye to confusion and hello to seamless
        communication! 🚀
      </p>
    </section>
  );
}
