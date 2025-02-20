import ChatInterfaceHeader from "./ChatInterfaceHeader";
import ChatInterfaceAside from "./ChatInterfaceAside/ChatInterfaceAside";
export default function ChatInterface() {
  return (
    <section className="flex flex-col h-dvh">
        <ChatInterfaceHeader />
        <ChatInterfaceAside />
    </section>
  );
}
