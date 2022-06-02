import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Swipe />} />
        <Route path="/app/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
