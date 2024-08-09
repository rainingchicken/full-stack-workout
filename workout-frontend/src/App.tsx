import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        {/* {workouts &&
          workouts.map((workout) => <p key={workout._id}> workout.title</p>)} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
