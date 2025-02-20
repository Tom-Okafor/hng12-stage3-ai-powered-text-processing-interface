import Logo from "../Logo";

export default function ChatInterfaceHeader() {
  return (
    <header className="px-6 py-1 h-[60px] bg-red-light shadow-[0px_5px_8px_-5px_#fe79ea,0px_5px_8px_-5px_#777]">
      <Logo height={30} fontSize="lg" />
    </header>
  );
}
