import { Routes, Route } from "react-router-dom";
import Frames from "../components/Frames/Frames";
import ChatInterface from "../components/ChatInterface/ChatInterface";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Frames />}></Route>
      <Route path="/chat" element={<ChatInterface />}></Route>
    </Routes>
  );
}
