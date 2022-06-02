import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Swipe />} />
      </Routes>
    </div>
  );
}

export default App;
