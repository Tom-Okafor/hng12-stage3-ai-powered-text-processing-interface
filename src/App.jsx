import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <main>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
