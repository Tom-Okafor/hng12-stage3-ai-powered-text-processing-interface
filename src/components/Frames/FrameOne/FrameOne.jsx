export default function FrameOne() {
  return (
    <section className="min-h-dvh flex flex-col gap-8 px-8 py-4 items-center justify-center">
      <img
        src="a-frame.png"
        alt="person with a robot"
        className="object-contain"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] tracking-widest leading-[150%] text-center font-bold font-ultra max-w-[40ch] text-bluish-dark antialiased">Understand Any Text, Any Language – Instantly!</h1>
      <p className="text-xl text-center max-w-[50ch] font-poiret font-black tracking-wider">
        <span className="text-pink-thick font-black tracking-widest font-yatra text-2xl">LinguaSwift</span> harnesses the power of AI to translate,
        summarize, and detect languages effortlessly. Say goodbye to language
        barriers and information overload!
      </p>
    </section>
  );
}
