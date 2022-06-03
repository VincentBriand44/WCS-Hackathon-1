import { Route, Routes } from "react-router-dom";
import SwipeProfile from "./components/SwipeProfile";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Swipe />} />
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
