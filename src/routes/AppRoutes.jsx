import { Routes, Route } from "react-router-dom";
import Frames from "../components/Frames/Frames";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Frames />}></Route>
      <Route path="/chat"></Route>
    </Routes>
  );
}
