import Scenarios from "./pages/Scenarios";
import Dialogue from "./pages/dialogue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scenarios />} />
        <Route path="/dialogue/:scenarioName" element={<Dialogue />} />
      </Routes>
    </Router>
  );
}
