import { Route, Routes } from "react-router-dom";
import SwipeProfile from "./components/SwipeProfile";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import ItsMatch from "./pages/ItsMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Swipe />} />
        <Route path="/app/itsmatch" element={<ItsMatch />} />
      </Routes>
    </div>
  );
}

export default App;
