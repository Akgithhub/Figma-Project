import Events from "./components/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/Collections";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/collection" element={<Collections />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
